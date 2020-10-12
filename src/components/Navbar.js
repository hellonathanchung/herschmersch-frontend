import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className="navbar">
      {!localStorage.token ? (
        <div className="navbar-list">
          <Link to="/login" className="navbar-list">
            Log In
          </Link>
          <Link to="/signup" className="navbar-list">
            Sign Up
          </Link>{" "}
        </div>
      ) : (
        <div className="navbar-list">
        <Link to="/stocks" className="navbar-list">
          Stocks
        </Link>{" "}
        <Link to="/portfolio" className="navbar-list">
          Portfolio
        </Link>{" "}
        <Link to="/posts/new" className="navbar-list">
          New Post
        </Link>{" "}
        <Link to="/posts/" className="navbar-list">
          All Posts
        </Link>{" "}
        <Link to="/logout/" className="navbar-list" onClick={props.handleLogout} >
          Logout
        </Link>{" "}
      </div>
      )}
    </div>
  );
};

export default Navbar;