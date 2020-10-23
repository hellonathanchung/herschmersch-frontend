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
            <b>
              <br/>
              Created by{" "}
              <img
                alt="cool-cry-icon"
                src="https://i.pinimg.com/236x/ae/0f/e3/ae0fe396a3593501baa3483600cc9027--emojis-raising.jpg"
                width="5%"
              />{" "}
              by Nathan
            </b>
        </Form>
        <div>
          <p>
          </p>
        </div>
      </div>
      </div>
    );
  }
}

export default Signup;