export const BASE_URL = 'http://localhost:3005';

export function register(name, email, password) {
  function getResponseData(res) {
    return res.ok ? res.json() : Promise.reject(res.status);
  }

  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  }).then((res) => {
    console.log(`res 1 ==>`, res);
    return getResponseData(res);
  });
}

export function login(email, password) {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
    })
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(`error login`, err));
}
