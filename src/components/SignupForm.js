import React from "react";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

import { Link } from "react-router-dom";

class Signup extends React.Component {
  state = {
    newUser: {

      username: "",
      password: "",
      password_confirmation: "",
    },
  };


  handleOnChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState((prevState) => ({
      newUser: { ...prevState.newUser, [name]: value },
    }));
  };

  render() {
    let newUser = this.state.newUser
    return (
      
      <div className="service-container" >
            <div className="ui one column stackable center aligned page grid" >

        <Form className="ui form"
          onChange={(e) => this.handleOnChange(e)}
          onSubmit={(e) => this.props.handleSignUpSubmit(e, newUser)}
        >
  <h2>Signup</h2>

          <div>
            <div className="field" >
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={this.state.username}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
              />
              <input
                type="password"
                name="password_confirmation"
                placeholder="Password Confirmation"
                value={this.state.password_confirmation}
              />
            </div>
          </div>
          <div className="submit-button">
            <input type="submit" value="Submit" className="btn" />
          </div>
        <Link exact to="/login" className="signup-link">
          Already have an account?
        </Link>
        </Form>
        <div>
          <p>
            <b>
              Created by{" "}
              <img
                alt="cool-cry-icon"
                src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/230/chart-with-upwards-trend_1f4c8.png"
                width="5%"
              />{" "}
              by Nathan
            </b>
          </p>
        </div>
      </div>
      </div>
    );
  }
}

export default Signup;