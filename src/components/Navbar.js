import React from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux"

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
        {/* <Link to="/profile" className="navbar-list">
          Hello {props.user.username}
        </Link>{" "} */}
        <Link to="/stocks" className="navbar-list">
          Stocks
        </Link>{" "}
        <Link to="/portfolio" className="navbar-list">
          Portfolio
        </Link>{" "}
        <Link to="/posts/" className="navbar-list">
          All Posts
        </Link>{" "}
        <Link to="/login/" className="navbar-list" onClick={props.handleLogout} >
          Logout
        </Link>{" "}
      </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {user: state.user}
}

export default connect(mapStateToProps) (Navbar)