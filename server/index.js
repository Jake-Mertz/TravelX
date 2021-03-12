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
  // res.status(200).send(req.params);
  // const userSQL = `
  //   insert into "userTable" ("userId", "createdAt", "name", "email", "password")
  //   values (default, default, $1, $2, $3)
  //   returning "userId"
  // `;
  // const userSQL = `
  //   insert into "userTable" ("userId", "createdAt")
  //   values (default, default)
  //   returning "userId"
  // `;
  // db.query(userSQL)
  //   .then(result => {
  //     const user = result.rows[0];
  //     return {
  //       userId: user.userId
  //     };
  //   })
  //   .then(result => {
  //     req.session.userId = result.userId;
  const userInfoSQL = `
        insert into "userTable2" ("name", "email", "password")
        values ($1, $2, $3)
        returning "userId", "createdAt", "name", "email", "password"
      `;
  const userInfoParams = [req.body.name, req.body.email, req.body.password];
  db.query(userInfoSQL, userInfoParams)
    .then(result => {
      res.status(201).json(result.rows[0]);
    })
    // .catch(err => next(err));

  // const userParams = [req.body.name, req.body.email, req.body.password];
  // db.query(userSQL, userParams)
  //   .then(result => {
  //     const newUser = result.rows;
  //     res.status(200).json(newUser);
  //   })
    // .catch(err => next(err));
    .catch(res.send('whoops!'));
  // res.status(200).send({ message: 'hello!' });
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
