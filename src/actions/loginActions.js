import {LOGIN_USER} from './types'

const API_ROOT = `http://localhost:3000/api/v1/`;

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearers ${localStorage.token}`,
};

export const login = (userCredentials) => {

  const userPosts = userCredentials.user.posts
  const userStocks = userCredentials.user.list_stocks
  const username = userCredentials.user.username
  const user_id = userCredentials.user.id
  return {
    type: "LOGIN_USER",
    payload: {userPosts, userStocks, username, user_id}
  }
  // return fetch(`${API_ROOT}login`, {
  //   method: "POST",
  //   headers: headers,
  //   body: JSON.stringify({ username, password }),
  // }).then((res) => res.json());
};

