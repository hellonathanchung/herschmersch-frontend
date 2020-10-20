"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchNews = void 0;

var _types = require("./types");

var API_KEY = process.env.REACT_APP_NEWS_API_KEY;

var fetchNews = function fetchNews(ticker) {
  return function (dispatch) {
    debugger; // let ticker = property passed down

    var URL = "http://newsapi.org/v2/everything?q=".concat(ticker, "&from=2020-09-19&sortBy=publishedAt&apiKey=28359d5ef88b4fb59cf77b57169c3c31");
    console.log('fetching news...');
    fetch("".concat(URL).concat(API_KEY)).then(function (res) {
      return res.json();
    }).then(function (newsArticles) {
      return dispatch({
        type: _types.FETCH_NEWS,
        payload: newsArticles
      });
    });
  };
};

exports.fetchNews = fetchNews;