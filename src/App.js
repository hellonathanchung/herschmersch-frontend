import React from 'react';
import './App.css';
import 'fomantic-ui-css/semantic.css';
import api from './services/api'
import { login } from './actions/loginActions.js'
import { connect } from 'react-redux'

// containers
import PostContainer from './containers/PostContainer'
import Portfolio from './containers/Portfolio'
import UserProfile from './containers/UserProfile'

//components
import Loading from './components/Loading'
import SignupForm from './components/SignupForm'
import StockContainer from './containers/StockContainer'
import Header from "./components/Header";
import Login from "./containers/Login";
import PostForm from  "./components/PostForm"
import { BrowserRouter as Router, Link, NavLink, Route, Switch, withRouter } from "react-router-dom";



// import News from './components/News'
class App extends React.Component {
 state = {
   user:{},
  }

  componentDidMount() {
    
    if(localStorage.token){
      fetch('http://localhost:3000/api/v1/persist',{
        headers:{
          "Authorization": `Bearer ${localStorage.token}`
        }
      })
      .then(response => response.json()
      .then(json => this.handleAuthResponse(json)))
    }
    this.props.history.push("/login");

  }


  

handleLoginSubmit = (event, userCredentials) => {
  event.preventDefault();
  const username = userCredentials.username;
  const password = userCredentials.password;
  
  api.auth.login(username, password)
  .then(response => {
    if (!response.error) {
    this.handleAuthResponse(response)
    }else{
      alert(response.error)
    }
  })

};

handleSignUpSubmit = (e, newUser) => {
  e.preventDefault();
  console.log("submit");
  api.auth.signup(newUser)
  .then(response => {
    if (!response.error) {
  this.handleAuthResponse(response)
    }else{
      alert(response.error)
    }
  })

};

handleAuthResponse = (response) => {
  if (response.user){
    localStorage.token = response.token
    this.props.login(response)
    this.props.history.push("/portfolio")
  }
  else {
    this.props.history.push("/login");
  }
}

handleLogout = () => {
  
  localStorage.clear();
  this.props.history.push("/login");

}

render() {
  console.log(this.state)
  return (
    <div className="App">
    <Header handleLogout={this.handleLogout} />
      <Route 
      path="/login"
      render={(routerProps) => {
        return <Login {...routerProps} handleLoginSubmit={this.handleLoginSubmit} handleLoginChange={this.props.handleLoginChange} />;
          }}
          /> 
    <Switch>
      <Route 
      path="/profile"
      render={(routerProps) => {
        return <UserProfile {...routerProps} />;
      }}
      /> 
      <Route
      path="/signup" 
      render={(...routerProps) => {
        return <SignupForm handleSignUpSubmit={this.handleSignUpSubmit} />;
      }}
      />
      <Route path="/posts/new" render={(routerProps) => {
        return <PostForm {...routerProps} token={this.state.token} user={this.state.user}/>;
      }}
      /> 

      <Route path="/posts/" render={(routerProps) => {
        return <PostContainer {...routerProps} />;
      }}
      /> 
      <Route path="/stocks" component={StockContainer}/> 
      <Route path="/portfolio" component={Portfolio}/>
    </Switch>
    </div>
  );
}
}

const mapDispatchToProps = (dispatch) => {return {login:(userCredentials) => dispatch(login(userCredentials))}}

export default connect (null, mapDispatchToProps) ( withRouter(App))
