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

// Client uploads profile photo
app.post('api/uploads', uploadsMiddleware, (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    throw new ClientError(400, 'name is a required field');
  }

  const image = `/userTable/${req.file.filename}`;
  const imageSQL = `
    insert into "userTable" ("profilePhotoUrl", "name")
    values ($1, $2)
    returning "profilePhotoUrl", "name"
  `;
  const imageParams = [image, name];
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
