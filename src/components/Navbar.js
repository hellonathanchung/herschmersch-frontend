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
        </div>
      ) : (
        <div className="navbar-list">
          <Link to="/" className="navbar-list">
            Home{" "}
          </Link>
          <Link to="/stock" className="navbar-list">
            New Service{" "}
          </Link>
          <div className="search-container">
            <input
              type="text"
              onChange={props.handleSearch}
              placeholder="Search"
            />
          </div>
          <Link to="/profile" className="navbar-list">
            Profile{" "}
          </Link>
          <Link to="/portfolio" className="navbar-list">
            My Requests{" "}
          </Link>
          <Link to="/" className="navbar-list" onClick={props.handleLogout}>
            {" "}
            Logout{" "}
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;