import React from 'react';
import api from '../services/api'

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



  handleLoginSubmit = (event) => {
    event.preventDefault();
    
    const username = this.state.username;
    const password = this.state.password;
    
    api.auth.login(username, password)
    .then(response => {
      if (!response.error) {
        this.setState({user: {
          id:response.id,
          username: response.username,
        posts:response.posts,
        list_stocks:response.list_stocks,
        imageUrl:response.imageUrl}}
        )
        // this.props.handleLogin(response);
        this.props.history.push("/portfolio");
        

      }else{

        alert(response.error)
      }
    })

  };

render() {
  return (
    
    <div className="one-column-grid">
    <form onSubmit = {(event) => this.handleLoginSubmit(event)}>
      <h2>Please log in below:</h2>
      <div className="profile-form-row-center">
        <label name="username">username</label>
        <input 
          onChange={(e) => this.handleLoginChange(e)}
          type="text"
          name="username"
          value={this.state.username}
          placeholder="username"
        ></input>
        <label name="password">Password</label>
        <input
          onChange={(e) => this.handleLoginChange(e)}
          type="password"
          name="password"
          placeholder="Password"
          value={this.state.password}

        ></input>
      </div>


      <br></br>
      <button >Submit</button>
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
);
}
}

export default Login
