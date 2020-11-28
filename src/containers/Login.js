import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Link } from "react-router-dom";

class Login extends React.Component {

  state = {
    username: "",
    password: "",
  };

  handleLoginChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

render() {
  let userCrendentials=this.state
  return (
    
      <div className="service-container" >
      <div className="ui one column stackable center aligned page grid" >

    <Form className = "ui form" onSubmit = {(event) => this.props.handleLoginSubmit(event, userCrendentials)}>
      <h2>Please log in</h2>
      <div className="field">
        <label name="username">Username</label>
        <input 
          onChange={(e) => this.handleLoginChange(e)}
          type="text"
          name="username"
          value={this.state.username}
          placeholder="Username"
        ></input>
        </div>
        <div className="field">

        <label name="Password">Password</label>
        <input
          onChange={(e) => this.handleLoginChange(e)}
          type="password"
          name="password"
          placeholder="Password"
          value={this.state.password}

        ></input>
        
      </div>


      <br></br>
      <div className="submit-button">
            <input type="submit" value="Login" className="btn" />
            <br/>
            <p></p>
            <Link exact to="/signup" className="signup-link">
          Don't have an account?
        </Link>
          </div>
          <b>
          Created by
          {" "}
          <img
            alt="cool-cry-icon"
            src="https://i.pinimg.com/236x/ae/0f/e3/ae0fe396a3593501baa3483600cc9027--emojis-raising.jpg"
            width="5%"
          />{" "}
          Nathan
        </b>
          </Form>
          
    <div>
      <br></br>
    </div>
    
    <div>
 
      <p>
        
      </p>
      </div>
    </div>
  </div>
);
}
}

export default Login
