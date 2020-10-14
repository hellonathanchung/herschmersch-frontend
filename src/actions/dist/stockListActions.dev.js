"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeStockFromList = exports.addStockToList = void 0;

var _types = require("./types");

var addStockToList = function addStockToList(e, name, symbol) {
  return function (dispatch) {
    console.log('dispatch to list');
    console.log(name, symbol);
    var stockListInformation = {
      name: name,
      symbol: symbol,
      list_id: 17,
      initial_cost: 40
    };
    fetch('http://localhost:3000/api/v1/list_stocks', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': "Bearer ".concat(localStorage.token)
      },
      body: JSON.stringify(stockListInformation)
    }).then(function (res) {
      return res.json();
    }).then(function (post) {
      return dispatch({
        type: _types.ADD_STOCK_TO_LIST,
        payload: stockListInformation
      });
    });
  };
};

exports.addStockToList = addStockToList;

var removeStockFromList = function removeStockFromList(e, stockId) {
  return function (dispatch) {
    fetch("http://localhost:3000/api/v1/list_stocks/".concat(stockId), {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'Authorization': "Bearer ".concat(localStorage.token)
      }
    }).then(function (res) {
      return res.json();
    }).then(function (post) {
      return dispatch({
        type: _types.REMOVE_STOCK_FROM_LIST
      });
    }); // need to include list_portfolio:"Portfolio" 
  };
};

exports.removeStockFromList = removeStockFromList;