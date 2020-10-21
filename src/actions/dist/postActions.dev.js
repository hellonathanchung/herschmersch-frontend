"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deletePost = exports.updatePost = exports.createPost = exports.fetchPosts = void 0;

var _types = require("./types");

var fetchPosts = function fetchPosts() {
  return function (dispatch) {
    console.log('fetching...');
    fetch('http://localhost:3000/api/v1/posts').then(function (res) {
      return res.json();
    }).then(function (posts) {
      return dispatch({
        type: _types.FETCH_POSTS,
        payload: posts
      });
    });
  };
};

exports.fetchPosts = fetchPosts;

var createPost = function createPost(postData, token) {
  return function (dispatch) {
    console.log('adding a post...');
    fetch('http://localhost:3000/api/v1/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': "Bearer ".concat(token)
      },
      body: JSON.stringify(postData)
    }).then(function (res) {
      return res.json();
    }).then(function (post) {
      return dispatch({
        type: _types.NEW_POST,
        payload: post
      });
    });
    console.log("Post has been created");
  };
};

exports.createPost = createPost;

var updatePost = function updatePost(event, postId, postData, token) {
  return function (dispatch) {
    debugger;
    console.log('updating a post...');
    fetch("http://localhost:3000/api/v1/posts/".concat(postId), {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'Authorization': "Bearer ".concat(token)
      },
      body: JSON.stringify(postData)
    }).then(function (res) {
      return res.json();
    }).then(function (post) {
      return dispatch({
        type: _types.UPDATE_POST,
        payload: post
      });
    });
    console.log("Post has been created");
  };
};

exports.updatePost = updatePost;

var deletePost = function deletePost(e, postId) {
  return function (dispatch) {
    fetch("http://localhost:3000/api/v1/posts/".concat(postId), {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'Authorization': "Bearer ".concat(localStorage.token)
      }
    }).then(function (res) {
      return res.json();
    }).then(function (data) {
      return dispatch({
        type: _types.DELETE_POST,
        payload: postId
      });
    });
    console.log("Post has been deleted");
  };
};

exports.deletePost = deletePost;