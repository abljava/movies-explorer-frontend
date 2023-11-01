import { BASE_URL } from '../utils/config';

const getResponseData = async (res)  => {
  if(!res.ok) {
    const data = await res.json()
    throw new Error (data.message)
  }
  return res.json()
}

export function register(name, email, password) {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  }).then((res) => {
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
  }).then((res) => {
    return getResponseData(res);
  });
}
