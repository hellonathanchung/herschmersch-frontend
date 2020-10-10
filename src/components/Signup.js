import React from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

class Signup extends React.Component {
  state = {
    newUser: {
      first_name: "",
      last_name: "",
      username: "",
      imageUrl: "",
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

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    let newUser = this.state.newUser;
    api.auth.signup(newUser).then(console.log)

    
    // api.auth.signup(newUser).then((response) => {
    //   if (response.error) {
    //     alert(response.error);
    //     this.setState({ error: true });
    //   } else {
    //     this.props.handleLogin(response);
    //     this.props.history.push("/");
    //   }
    // });
  };

  render() {
    return (
      
      <div className="service-container" >
        
        <form className="ui form"
          onChange={(e) => this.handleOnChange(e)}
          onSubmit={(e) => this.handleSubmit(e)}
        >
          <div>
            <div className="field" >
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                value={this.state.first_name}
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                value={this.state.last_name}
              />
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={this.state.username}
              />
              <input
                type="text"
                name="imageURL"
                placeholder="Image URL"
                value={this.state.imageUrl}
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
                placeholder="password Confirmation"
                value={this.state.password_confirmation}
              />
            </div>
          </div>
          <div className="submit-button">
            <input type="submit" value="Submit" className="btn" />
          </div>
        </form>
        <Link exact to="/login" className="signup-link">
          Already have an account?
        </Link>
        <div>
          <p>
            <b>
              Created with{" "}
              <img
                alt="cool-cry-icon"
                src="https://pbs.twimg.com/media/EF-36wfWwAEtTNY.jpg"
                width="5%"
              />{" "}
              by Nathan
            </b>
          </p>
        </div>
      </div>
    );
  }
}

export default Signup;