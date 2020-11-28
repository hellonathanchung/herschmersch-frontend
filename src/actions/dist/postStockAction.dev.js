"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addPostStock = void 0;

var _types = require("./types");

var addPostStock = function addPostStock(event, stocks) {
  return function (dispatch) {
    var url = "https://herschmerch-api.herokuapp.com/api/v1/";
    fetch("".concat(url, "list_stocks"), {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': "Bearer ".concat(localStorage.token)
      },
      body: JSON.stringify(stockListInformation)
    }).then(function (res) {
      return res.json();
    }).then(function (stockData) {
      return dispatch({
        type: _types.ADD_POST_STOCK,
        payload: stockData
      });
    });
  };
};

exports.addPostStock = addPostStock;