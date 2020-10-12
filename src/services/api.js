const API_ROOT = `http://localhost:3000/api/v1/`;

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  // Authorization: `Bearers ${token}`,
};

const login = (username, password) => {
  return fetch(`${API_ROOT}login`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ username, password }),
  }).then((res) => res.json());
};

const signup = (newUser) => {
  return fetch(`${API_ROOT}users`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ user: newUser }),
  }).then((res) => res.json());
};

const getCurrentUser = () => {
  return fetch(`${API_ROOT}current_user`, {
    headers: headers,
  }).then((res) => res.json());
};


// const newPost = (newPost) => {
  
//   fetch('http://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     headers: {
//       'content-type':'application/json'
//     },
//     body: JSON.stringify(newPost)
//   }).then((res) => res.json())
// .then(data => console.log(data))}

export default {
  auth: {
    login:login,
    getCurrentUser: getCurrentUser,
    signup: signup,
  },
  // post:{
  //   newPost:newPost
  // }
}