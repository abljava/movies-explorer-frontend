//  https://api.nomoreparties.co/beatfilm-movies

import { moviesApiUrl } from './config';

class MoviesApi {
  constructor(params) {
    this._baseUrl = params.baseUrl;
  }

  _getResponseData(res) {
    return res.ok ? res.json() : Promise.reject(res.status);
  }

  getMovies(token) {
    return fetch(`${this._baseUrl}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => this._getResponseData(res));
  }
}

const moviesApi = new MoviesApi({
  baseUrl: `${moviesApiUrl}/beatfilm-movies`,
});

export { moviesApi };
