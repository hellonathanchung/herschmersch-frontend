"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchNews = void 0;

var _types = require("./types");

var API_KEY = process.env.REACT_APP_STOCK_API_KEY;

var fetchNews = function fetchNews(symbol) {
  return function (dispatch) {
    dispatch({
      type: _types.LOADING_NEWS
    });
    var URL = "https://stocknewsapi.com/api/v1?tickers=".concat(symbol, "&items=50&token=").concat(API_KEY);
    fetch(URL).then(function (res) {
      return res.json();
    }).then(function (newsArticles) {
      return dispatch({
        type: _types.FETCH_NEWS,
        payload: newsArticles.data
      });
    });
  };
};

exports.fetchNews = fetchNews;