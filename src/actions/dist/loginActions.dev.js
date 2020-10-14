"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = void 0;

var _types = require("./types");

var API_ROOT = "http://localhost:3000/api/v1/";
var headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: "Bearers ".concat(localStorage.token)
};

var login = function login(userCredentials) {
  var userPosts = userCredentials.user.posts;
  var userStocks = userCredentials.user.list_stocks;
  var username = userCredentials.user.username;
  var user_id = userCredentials.user.id;
  return {
    type: "LOGIN_USER",
    payload: {
      userPosts: userPosts,
      userStocks: userStocks,
      username: username,
      user_id: user_id
    }
  }, {
    type: "INITIAL_STOCK_LIST",
    payload: userStocks
  };
};

exports.login = login;