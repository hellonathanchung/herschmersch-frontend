"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.logout = exports.login = void 0;

var _types = require("./types");

var API_ROOT = "https://herschmerch-api.herokuapp.com/api/v1/";
var headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: "Bearers ".concat(localStorage.token),
};

var login = function login(userCredentials) {
  return function (dispatch) {
    var userPosts = userCredentials.user.posts;
    var userStocks = userCredentials.user.list_stocks;
    var username = userCredentials.user.username;
    var user_id = userCredentials.user.id;
    dispatch({
      type: _types.INITIAL_STOCK_LIST,
      payload: userStocks,
    });
    dispatch({
      type: _types.LOGIN_USER,
      payload: {
        userPosts: userPosts,
        userStocks: userStocks,
        username: username,
        user_id: user_id,
      },
    });
  };
};

exports.login = login;

var logout = function logout() {
  return function (dispatch) {
    dispatch({
      type: _types.LOGOUT_USER,
      payload: {},
    });
  };
};

exports.logout = logout;
