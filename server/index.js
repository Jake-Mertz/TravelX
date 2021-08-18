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

// //////////////////////////////////////////////////////////////////////////////////////

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

// Client uploads sign-up profile photo
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

// Client fills out sign-up interests form
// app.post('/api/intro-interests', (req, res, next) => {

// })

// User creates trip
app.post('/api/createTrip', (req, res, next) => {
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

app.delete('/api/deleteTrip', (req, res, next) => {
  const deleteSQL = `
    delete from "userTrips4"
      where "tripId" = $1
      returning *
  `;
  const deleteParams = [req.body];
  db.query(deleteSQL, deleteParams)
    .then(result => {
      res.status(200);
    })
    .catch(err => next(err));
});

// Map user trips to home page
app.get('/api/mapTrips2', (req, res, next) => {
  const userTripSQL = `
    select
    "tripId",
    "destination",
    "arrival",
    "departure"
    from "userTrips4"
  `;
  db.query(userTripSQL)
    .then(result => {
      const trips = result.rows;
      res.status(200).json(trips);
    })
    .catch(err => next(err));
});

// Extra code from createSuggestions endpoint directly below
// const userSuggestionsSQL = `
//   insert into "userSuggestions" ("userId", "name")
//   values ("ut"."userId", "ut"."name")
//   from "userTable" as "ut"
//   returning "userId", "name"
// `;

// Map suggested users to home page. This endpoint is my effort
// to select certain users from primary user database table, and
// POST them to a secondary table. When functional, this will
// replace mapSuggestions and mapHome endpoints (below).
// app.post('/api/createSuggestions', (req, res, next) => {
//   const userSuggestionsSQL = `
//     select
//     "userId",
//     "name"
//     from "userTable2"
//   `;
//   db.query(userSuggestionsSQL)
//     .then(result => {
//       const suggestions = result.rows;
//       const fillSQL = `
//         insert into "userSuggestions"
//         values ($1, $2)
//         returning "userId"
//   `;
//       const fillParams = [suggestions.userId, suggestions.name];
//       return db.query(fillSQL, fillParams);
//     })
//     .then(result => {
//       const suggestedUsers = result.rows;
//       res.status(200).json(suggestedUsers);
//     })
//     .catch(err => next(err));
// });

// Map suggested users to home page. A placeholder, currently maps
// users from dummy data "userSuggestions" table.
app.get('/api/mapSuggestions', (req, res, next) => {
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
    join "userSuggestions" as "ut" using ("userId")
  `;
  db.query(userListSQL)
    .then(result => {
      const users = result.rows;
      res.status(200).json(users);
    })
    .catch(err => next(err));
});

// Map suggested users to home page. A placeholder, currently maps
// users to home page from dummy data in userTable2.
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

// User removes suggested user from suggested user list
app.delete('/api/deleteSuggestion', (req, res, next) => {
  const deleteSQL = `
    delete from "userTable2"
      where "userId" = $1
      returning *
  `;
  const deleteParams = [req.body.userJawn];
  db.query(deleteSQL, deleteParams)
    .then(result => {
      res.status(200);
    })
    .catch(err => next(err));
});

// ////////////////////////////////////////////////////////////////////////////////////////

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
