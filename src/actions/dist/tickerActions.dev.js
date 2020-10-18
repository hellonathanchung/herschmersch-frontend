"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchTickers = void 0;

var _types = require("./types");

var API_KEY = process.env.REACT_APP_MARKETSTACK_API_KEY;

var fetchTickers = function fetchTickers() {
  return function (dispatch) {
    console.log('fetching tickers...');
    fetch("http://api.marketstack.com/v1/tickers?access_key=".concat(API_KEY)).then(function (res) {
      return res.json();
    }).then(function (tickers) {
      return dispatch({
        type: _types.FETCH_TICKERS,
        payload: tickers.data
      });
    });
  };
};

exports.fetchTickers = fetchTickers;