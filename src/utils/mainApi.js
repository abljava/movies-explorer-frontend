import { BASE_URL, MOVIES_API } from '../utils/config';

class MainApi {
  constructor(params) {
    this._baseUrl = params.baseUrl;
  }

  _getResponseData = async (res)  => {
    if(!res.ok) {
      const data = await res.json()
      throw new Error (data.message)
    }
    return res.json()
  }

  getUserInfo(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => this._getResponseData(res));
  }

  editUserInfo(data, token) {
    return fetch(`${this._baseUrl}/users/me`, {
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
    return fetch(`${this._baseUrl}/movies`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => this._getResponseData(res));
  }

  saveMovie(movie, token) {
    return fetch(`${this._baseUrl}/movies`, {
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
    return fetch(`${this._baseUrl}/movies/${movieId} `, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => this._getResponseData(res));
  }
}

const mainApi = new MainApi({
  baseUrl: BASE_URL,
});

export { mainApi };
