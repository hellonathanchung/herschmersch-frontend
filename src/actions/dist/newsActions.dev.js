"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchNews = void 0;

var _types = require("./types");

var _reactMoment = _interopRequireDefault(require("react-moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var API_KEY = process.env.REACT_APP_NEWS_API_KEY;

var fetchNews = function fetchNews(symbol) {
  return function (dispatch) {
    var date = (0, _reactMoment["default"])().format("DD-MM-YYYY hh:mm:ss");
    console.lo(date); // let ticker = property passed down

    var URL = "http://newsapi.org/v2/everything?q=".concat(symbol, "&from=2020-10-10&sortBy=publishedAt&apiKey=").concat(API_KEY);
    debugger;
    console.log('fetching news...');
    fetch(URL).then(function (res) {
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