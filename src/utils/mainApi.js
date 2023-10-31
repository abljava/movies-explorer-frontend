import { MOVIES_API } from '../utils/config';

class MainApi {
  constructor(params) {
    this._BASE_URL = params.BASE_URL;
  }

  _getResponseData(res) {
    return res.ok ? res.json() : Promise.reject(res.status);
  }

  getUserInfo(token) {
    return fetch(`${this._BASE_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => this._getResponseData(res));
  }

  editUserInfo(data, token) {
    return fetch(`${this._BASE_URL}/users/me`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
    }).then((res) => this._getResponseData(res));
  }

  getSavedMovies(token) {
    return fetch(`${this._BASE_URL}/movies`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => this._getResponseData(res));
  }

  saveMovie(movie, token) {
    return fetch(`${this._BASE_URL}/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        nameRU: movie.nameRU,
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `${MOVIES_API}${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `${MOVIES_API}${movie.image.url}`,
        movieId: movie.id,
        nameEN: movie.nameEN,
      }),
    }).then((res) => this._getResponseData(res));
  }

  deleteMovie(movieId, token) {
    return fetch(`${this._BASE_URL}/movies/${movieId} `, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => this._getResponseData(res));
  }
}

const mainApi = new MainApi({
  BASE_URL: 'https://api.movies-explorer.app.nomoredomainsicu.ru',
});

export { mainApi };
