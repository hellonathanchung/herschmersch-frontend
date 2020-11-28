"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var API_ROOT = "https://herschmerch-api.herokuapp.com/api/v1/";
var headers = {
  "Content-Type": "application/json",
  Accept: "application/json" // Authorization: `Bearers ${token}`,

};

var login = function login(username, password) {
  return fetch("".concat(API_ROOT, "login"), {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      username: username,
      password: password
    })
  }).then(function (res) {
    return res.json();
  });
};

var signup = function signup(newUser) {
  return fetch("".concat(API_ROOT, "users"), {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      user: newUser
    })
  }).then(function (res) {
    return res.json();
  });
};

var getCurrentUser = function getCurrentUser() {
  return fetch("".concat(API_ROOT, "current_user"), {
    headers: headers
  }).then(function (res) {
    return res.json();
  });
}; // const newPost = (newPost) => {
//   fetch('http://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     headers: {
//       'content-type':'application/json'
//     },
//     body: JSON.stringify(newPost)
//   }).then((res) => res.json())
// .then(data => console.log(data))}


var _default = {
  auth: {
    login: login,
    getCurrentUser: getCurrentUser,
    signup: signup
  } // post:{
  //   newPost:newPost
  // }

};
exports["default"] = _default;