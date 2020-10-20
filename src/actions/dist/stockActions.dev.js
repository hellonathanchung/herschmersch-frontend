"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchStocks = void 0;

var _types = require("./types");

var API_KEY = process.env.REACT_APP_MARKETSTACK_API_KEY;

var fetchStocks = function fetchStocks(newSymbol, stockName) {
  return function (dispatch) {
    var stockChartX = [];
    var stockChartY = [];
    var revStockChartX = stockChartX.reverse();
    var revStockChartY = stockChartY.reverse();
    var currentCost = 0;
    var stockTicker = newSymbol;
    var URL = "http://api.marketstack.com/v1/eod?access_key=".concat(API_KEY, "&symbols=").concat(stockTicker);
    fetch(URL).then(function (res) {
      return res.json();
    }).then(function (stockData) {
      console.log(stockData);
      stockData.data.map(function (stockDate) {
        stockChartX.push(stockDate.date);
        stockChartY.push(stockDate.high);
      });
      dispatch({
        type: _types.FETCH_STOCKS,
        payload: stockInformation
      });
    });
    var stockInformation = {
      symbol: newSymbol,
      name: stockName,
      stockChartXValues: revStockChartX,
      stockChartYValues: revStockChartY
    };
  };
};

exports.fetchStocks = fetchStocks;