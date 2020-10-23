"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeStockFromList = exports.addStockToList = void 0;

var _types = require("./types");

var addStockToList = function addStockToList(event, stockListData) {
  return function (dispatch) {
    console.log(stockListData);
    var stockListInformation = {
      name: stockListData.name,
      symbol: stockListData.symbol,
      list_id: 17,
      initialCost: stockListData.initialCost,
      shares: stockListData.shares
    };
    dispatch({
      type: _types.LOADING_STOCK_LIST
    });
    fetch('http://localhost:3000/api/v1/list_stocks', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': "Bearer ".concat(localStorage.token)
      },
      body: JSON.stringify(stockListInformation)
    }).then(function (res) {
      return res.json();
    }).then(function (stockData) {
      if (!stockData.error) {
        dispatch({
          type: _types.ADD_STOCK_TO_LIST,
          payload: stockData
        });
      } else {
        alert(stockData.error);
        return stockData.error;
      }
    });
  };
};

exports.addStockToList = addStockToList;

var removeStockFromList = function removeStockFromList(e, stockId) {
  return function (dispatch) {
    dispatch({
      type: _types.LOADING_STOCK_LIST
    });
    fetch("http://localhost:3000/api/v1/list_stocks/".concat(stockId), {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'Authorization': "Bearer ".concat(localStorage.token)
      }
    }).then(function (res) {
      return res.json();
    }).then(function (data) {
      return dispatch({
        type: _types.REMOVE_STOCK_FROM_LIST,
        payload: stockId
      });
    });
  };
};

exports.removeStockFromList = removeStockFromList;