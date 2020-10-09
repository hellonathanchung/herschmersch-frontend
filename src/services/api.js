const API_ROOT = `https://localhost:3000/api/v1`;

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  // Authorization: `Bearers ${token}`,
};

const login = (username, password) => {
  return fetch(`${API_ROOT}/login`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ username, password }),
  }).then((res) => res.json());
};

export default {
  auth: {
    login:login
  }
}