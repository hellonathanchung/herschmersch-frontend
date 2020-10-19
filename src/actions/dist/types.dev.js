"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FETCH_NEWS = exports.LOADING_NEWS = exports.INITIAL_STOCK_LIST = exports.REMOVE_STOCK_FROM_LIST = exports.ADD_STOCK_TO_LIST = exports.LOGOUT_USER = exports.LOGIN_USER = exports.ADD_LIST_STOCK = exports.FETCH_TICKERS = exports.FETCH_STOCKS = exports.UPDATE_POST = exports.DELETE_POST = exports.NEW_POST = exports.FETCH_POSTS = void 0;
//POST ACTIONS
var FETCH_POSTS = 'FETCH_POSTS';
exports.FETCH_POSTS = FETCH_POSTS;
var NEW_POST = 'NEW_POST';
exports.NEW_POST = NEW_POST;
var DELETE_POST = "DELETE_POST";
exports.DELETE_POST = DELETE_POST;
var UPDATE_POST = "UPDATE_POST"; //STOCK ACTIONS

exports.UPDATE_POST = UPDATE_POST;
var FETCH_STOCKS = 'FETCH_STOCKS';
exports.FETCH_STOCKS = FETCH_STOCKS;
var FETCH_TICKERS = 'FETCH_TICKERS';
exports.FETCH_TICKERS = FETCH_TICKERS;
var ADD_LIST_STOCK = 'ADD_LIST_STOCK'; //LOGIN ACTIONS

exports.ADD_LIST_STOCK = ADD_LIST_STOCK;
var LOGIN_USER = "LOGIN_USER";
exports.LOGIN_USER = LOGIN_USER;
var LOGOUT_USER = "LOGOUT_USER"; //STOCK_LIST_ACTIONS

exports.LOGOUT_USER = LOGOUT_USER;
var ADD_STOCK_TO_LIST = "ADD_STOCK_TO_LIST";
exports.ADD_STOCK_TO_LIST = ADD_STOCK_TO_LIST;
var REMOVE_STOCK_FROM_LIST = 'REMOVE_STOCK_FROM_LIST';
exports.REMOVE_STOCK_FROM_LIST = REMOVE_STOCK_FROM_LIST;
var INITIAL_STOCK_LIST = "INITIAL_STOCK_LIST"; //NEWS ACTIONS

exports.INITIAL_STOCK_LIST = INITIAL_STOCK_LIST;
var LOADING_NEWS = 'LOADING_NEWS';
exports.LOADING_NEWS = LOADING_NEWS;
var FETCH_NEWS = 'FETCH_NEWS';
exports.FETCH_NEWS = FETCH_NEWS;