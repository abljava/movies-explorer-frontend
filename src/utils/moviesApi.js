import { MOVIES_API } from './config';

class MoviesApi {
  constructor(params) {
    this._baseUrl = params.baseUrl;
  }

  _getResponseData(res) {
    return res.ok ? res.json() : Promise.reject(res.status);
  }

  getMovies() {
    return fetch(`${this._baseUrl}`).then((res) => this._getResponseData(res));
  }
}

const moviesApi = new MoviesApi({
  baseUrl: `${MOVIES_API}/beatfilm-movies`,
});

export { moviesApi };
