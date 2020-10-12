import React from 'react';
import api from '../services/api'
import {connect} from 'react-redux'

//handle forms with state

//onSubmit implement action 

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
    
    <div className="ui one column stackable center aligned page grid" >
    <div className="column twelve wide">

    <form className = "ui form" onSubmit = {(event) => this.props.handleLoginSubmit(event, userCrendentials)}>
      <h2>Please log in below:</h2>
      <div className="field">
        <label name="username">Username</label>
        <input 
          onChange={(e) => this.handleLoginChange(e)}
          type="text"
          name="username"
          value={this.state.username}
          placeholder="username"
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
      <button className="ui-button">Submit</button>
    </form>
    <div>
      <br></br>
    </div>
    <div>
      <p>
        <b>
          Created with{" "}
          <img
            alt="cool-cry-icon"
            src="https://pbs.twimg.com/media/EF-36wfWwAEtTNY.jpg"
            width="5%"
          />{" "}
          Nathan
        </b>
      </p>
      </div>
    </div>
  </div>
);
}
}

export default Login
