require('dotenv/config');
const express = require('express');

const db = require('./database');
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');
const uploadsMiddleware = require('./uploads-middleware');

const app = express();

app.use(staticMiddleware);
app.use(sessionMiddleware);

app.use(express.json());

app.get('/api/health-check', (req, res, next) => {
  db.query('select \'successfully connected\' as "message"')
    .then(result => res.json(result.rows[0]))
    .catch(err => next(err));
});

// new stuff goes here

// Client creates profile with username, email, and password
app.post('/api/createUser', (req, res, next) => {
  const userInfoSQL = `
        insert into "userTable2" ("name", "email", "password")
        values ($1, $2, $3)
        returning "userId", "createdAt", "name", "email", "password"
      `;
  const userInfoParams = [req.body.name, req.body.email, req.body.password];
  db.query(userInfoSQL, userInfoParams)
    .then(result => {
      // req.session.userId = result.userId;
      res.status(201).json(result.rows[0]);
    })
    .catch(err => next(err));
});

app.post('/api/createTrip2', (req, res, next) => {
  const tripInfoSQL = `
    insert into "userTrips4" ("destination", "arrival", "departure")
    values ($1, $2, $3)
    returning "tripId", "destination", "arrival", "departure"
    `;
  const tripInfoParams = [req.body.destination, req.body.arrival, req.body.departure];
  db.query(tripInfoSQL, tripInfoParams)
    .then(result => {
      res.status(201).json(result.rows[0]);
    })
    .catch(err => next(err));
});

// app.post('/api/createTrip', (req, res, next) => {
//   const tripInfoSQL = `
//     insert into "userTrips" ("userId", "destination", "arrivalYear", "arrivalMonth", "arrivalDay", "departureYear", "departureMonth", "departureDay")
//     values ($1, $2, $3, $4, $5, $6, $7, $8)
//     returning "tripId", "userId", "destination", "arrivalYear", "arrivalMonth", "arrivalDay", "departureYear", "departureMonth", "departureDay"
//   `;
//   const tripInfoParams = [req.body.userId, req.body.destination, req.body.arrivalYear, req.body.arrivalMonth, req.body.arrivalDay, req.body.departureYear, req.body.departureMonth, req.body.departureDay];
//   db.query(tripInfoSQL, tripInfoParams)
//     .then(result => {
//       res.status(201).json(result.rows[0]);
//     })
//     .catch(err => next(err));
// });

// Map users to home page
app.get('/api/mapHome', (req, res, next) => {
  const userListSQL = `
    select
    "ui"."userId",
    "ui"."shopping",
    "ui"."nightlife",
    "ui"."artsandculture",
    "ui"."food",
    "ui"."sightseeing",
    "ui"."leisure",
    "ut"."name",
    "ut"."userId"
    from "userinfo3" as "ui"
    join "userTable2" as "ut" using ("userId")
  `;
  db.query(userListSQL)
    .then(result => {
      const users = result.rows;
      res.status(200).json(users);
    })
    .catch(err => next(err));
});

app.get('/api/mapTrips', (req, res, next) => {
  const userTripSQL = `
    select
    "tripId",
    "destination",
    "arrivalYear",
    "arrivalMonth",
    "arrivalDay",
    "departureYear",
    "departureMonth",
    "departureDay"
    from "userTrips"
  `;
  db.query(userTripSQL)
    .then(result => {
      const trips = result.rows;
      res.status(200).json(trips);
    })
    .catch(err => next(err));
});

app.get('/api/mapTrips2', (req, res, next) => {
  const userTripSQL = `
    select
    "tripId",
    "destination",
    "arrival",
    "departure"
    from "userTrips3"
  `;
  db.query(userTripSQL)
    .then(result => {
      const trips = result.rows;
      res.status(200).json(trips);
    })
    .catch(err => next(err));
});

// app.get('api/createUser', (req, res, next) => {
//   const sql = `
//     select *
//     from "userTable"
//     where "userId" = $1
//   `;
//   const params = [req.params.userId];
//   db.query(sql, params)
//     .then(result => {
//       res.json(result.rows);
//     })
//     .catch(err => next(err));
// });

// app.get('api/createUser', (req, res, next) => {
//   res.render('form');
//   res.sendFile('index.html');
// });

// Client fills out interests form
// app.post('/api/intro-interests', (req, res, next) => {

// })

// Client uploads profile photo
app.post('api/uploads', uploadsMiddleware, (req, res, next) => {
  const image = `/userTable/${req.file.filename}`;
  const imageSQL = `
    insert into "userTable" ("profilePhotoUrl")
    values ($1)
    returning "profilePhotoUrl"
  `;
  const imageParams = [image];
  db.query(imageSQL, imageParams)
    .then(result => {
      const storedImage = result.rows;
      res.status(200).json(storedImage);
    })
    .catch(err => next(err));
});

// app.get('/api/userTable', (req, res, next) => {
//   const sql = `
//     select "profilePhotoUrl"
//       from "userTable"
//   `;
//   db.query(sql)
//     .then(result => {
//       res.json(result.rows);
//     })
//     .catch(err => next(err));
// });

// ///////////////////////////////////////////////////////////////////////////////////////////

app.use('/api', (req, res, next) => {
  next(new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404));
});

app.use((err, req, res, next) => {
  if (err instanceof ClientError) {
    res.status(err.status).json({ error: err.message });
  } else {
    console.error(err);
    res.status(500).json({
      error: 'an unexpected error occurred'
    });
  }
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});
