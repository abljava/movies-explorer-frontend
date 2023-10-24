class MainApi {
  constructor(params) {
    this._baseUrl = params.baseUrl;
  }

  _getResponseData(res) {return res.ok ? res.json() : Promise.reject(res.status)}

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

}

const mainApi = new MainApi({
  baseUrl: 'http://localhost:3005',
});

export { mainApi };



// export const BASE_URL = 'http://localhost:3005';

// export const register = (name, email, password) => {
//   return fetch(`${BASE_URL}/signup`, {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ name, email, password })
//   })
//     .then((res) => {
//       if (res.ok) {
//         return res.json()
//       }
//     })
//     .then((res) => {
//       console.log(`res auth  `,  res);
//       return res})
//     .catch((err) => console.log(`error registration`, err))
// }

// export const login = (email, password) => {
//   return fetch(`${BASE_URL}/signin`, {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ email, password })
//   })
//     .then((res) => {
//       if (res.status === 200) {
//         return res.json()
//       }
//     })
//     .then((res) => {
//       return res
//     })
//     .catch((err) => console.log(`error login`, err))

// }