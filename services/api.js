const API_ROOT = `httpL//localhost:300/api/v1`

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