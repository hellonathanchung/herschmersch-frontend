"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _postReducer = _interopRequireDefault(require("./postReducer"));

var _loginReducer = _interopRequireDefault(require("./loginReducer"));

var _tickerReducer = _interopRequireDefault(require("./tickerReducer"));

var _stockReducer = _interopRequireDefault(require("./stockReducer"));

var _stockListReducer = _interopRequireDefault(require("./stockListReducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _redux.combineReducers)({
  posts: _postReducer["default"],
  user: _loginReducer["default"],
  tickers: _tickerReducer["default"],
  stocks: _stockReducer["default"],
  stockList: _stockListReducer["default"]
});

exports["default"] = _default;