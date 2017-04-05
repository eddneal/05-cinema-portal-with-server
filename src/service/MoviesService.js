import movies from './../data/movies';

let cachedMovies = null;

const getAll = (callback) => {
  setTimeout(() => {
    if (Math.random() > 0.9) {
      return callback(new Error('Ooops, server is down, panic NOW!'));
    }

    if (cachedMovies) {
      return callback(null, cachedMovies);
    }

    cachedMovies = movies;

    return callback(null, cachedMovies);
  }, 200);
};

export default {
  getAll
};