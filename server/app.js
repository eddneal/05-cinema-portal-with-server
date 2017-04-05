const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const low = require('lowdb');
const fileAsync = require('lowdb/lib/storages/file-async');
const movies = require('./data/movies');
const cookieSession = require('cookie-session');

const app = express();
const db = low(`${__dirname}/data/db.json`, {
  storage: fileAsync
});
const isLoggedIn = (req, res, next) => {
  if (req.session.user) {
    return next();
  }

  next(new Error('User is not logged in'));
  // TODO
};

app.use(morgan('dev'));
app.use(cookieSession({
  name: 'session',
  keys: ['whatever', 'unicorn', 'vire'],

  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));
app.use(cors());
app.use(bodyParser.json());


app.post('/login', function (req, res) {
  // TODO
});

app.get('/movies', function (req, res, next) {
  if (Math.random() > 0.9) {
    return next(new Error('Ooops, server is down, panic NOW!'));
  }

  const movies = db.get('movies');

  res.send(movies);
});

app.get('/movies/:id', (req, res) => {
  const movie = db.get('movies')
    .find({id: +req.params.id})
    .value();

  if (!movie) {
    res.status(404).send({error: {message: 'Movie not found'}});
  }

  setTimeout(() => res.send(movie), 1000);
});

app.use(function (err, req, res, next) {
  res
    .status(500)
    .send({
      error: {
        message: 'Internal server error',
        detail: err.message
      }
    });
});

db.defaults({movies})
  .write()
  .then(() => {
    app.listen(5000, () => console.log('Server is listening'))
  });