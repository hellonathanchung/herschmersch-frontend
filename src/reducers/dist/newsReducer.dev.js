"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _types = require("../actions/types");

var initialState = {
  newsArticles: {}
};

function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  debugger;

  switch (action.type) {
    case _types.FETCH_NEWS:
      return {
        newsArticles: action.payload
      };

    default:
      return state;
  }
}