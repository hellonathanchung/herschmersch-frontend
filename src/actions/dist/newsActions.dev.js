"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchNews = void 0;

var _types = require("./types");

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var API_KEY = process.env.REACT_APP_STOCK_API_KEY;

var fetchNews = function fetchNews(symbol) {
  return function (dispatch) {
    console.log(API_KEY);
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
}; // let date= moment().format('YYYY-MM-DD');
// let URL = `http://newsapi.org/v2/everything?q=${symbol}&from=${date}&sortBy=publishedAt&apiKey=${API_KEY}` 


exports.fetchNews = fetchNews;