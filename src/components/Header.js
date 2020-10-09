import React, { Component } from 'react';
import Navbar from './Navbar';


class Header extends Component {


  render() {
    return (
      <header className="header" >
        <Navbar handleLogout={this.props.handleLogout}
          handleSearch={this.props.handleSearch}
        />
        <div className="header-image-cropper">
          <img src="https://images.squarespace-cdn.com/content/v1/5671cdbf0e4c11f307a70065/1493603313821-HMQ8EINJOYWTFU4HZRZI/ke17ZwdGBToddI8pDm48kApm4bZ6Mn3TiUWou3kA3bp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UWZaykogqWzieOupsqeSuBYug-y5Ut2InYZT1FrJD3yL-rj95DA1mjJIBxXFGHkuyQ/NHC_3164.jpg?format=750w"
            className="header-pic" alt="" />
        </div>
        <span className="text-center">HerschMersch</span>
      </header>
    );
  }

}

export default Header;