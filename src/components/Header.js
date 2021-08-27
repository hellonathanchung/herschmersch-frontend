import React, { Component } from "react";
import Navbar from "./Navbar";

class Header extends Component {
  render() {
    return (
      <header centered className="header">
        <Navbar handleLogout={this.props.handleLogout} handleSearch={this.props.handleSearch} />
        <div className="header-image-cropper">
          <img src="https://i.imgur.com/mPtwDk4.png" className="header-pic" alt="" />
        </div>
      </header>
    );
  }
}

export default Header;
