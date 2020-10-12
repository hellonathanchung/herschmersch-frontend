import React from 'react';
import './App.css';
import 'fomantic-ui-css/semantic.css';
import api from './services/api'


// containers
import PostContainer from './containers/PostContainer'
import Portfolio from './containers/Portfolio'

//components
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
    this.props.history.push("/login ");

    if(localStorage.token){
      fetch('http://localhost:3000/persist',{
        headers:{
          "Authorization": `Bearer ${localStorage.token}`
        }
      })
      .then(response => response.json()
      .then(json => this.handleAuthResponse(json)))

    }

  }
//   componentDidMount(){
//   //   let NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY
//   // const url = `http://newsapi.org/v2/everything?q=stocks&from=2020-09-07&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`;
//   // fetch(url)
//   //     .then((response) => response.json())
//   //     .then(articles => this.setState({articles : articles.articles}))
// }
handleAuthResponse = (response) => {
  if (response.user){
    localStorage.token = response.token
    this.setState({user: {
      id:response.user.id,
      username: response.user.username,
      posts:response.user.posts,
      list_stocks:response.user.list_stocks,
      imageUrl:response.user.imageUrl}, token:response.token}
  )
  this.props.history.push("/portfolio");
  }
  else {
    this.props.history.push("/login ");

  }
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
  // let newUser = this.state.newUser;
  api.auth.signup(newUser)
  .then(response => {
    if (!response.error) {
  this.handleAuthResponse(response)
    }else{
      alert(response.error)
    }
  })

};

handleLogout = () => {
  
  localStorage.clear();
  this.props.history.push("/login ");

}

render() {
  console.log(this.state)
  return (
    <div className="App">
    <Header handleLogout={this.handleLogout} handleSearch={this.handleSearch}/>
    <Switch>
      <Route 
      path="/login"
      render={(routerProps) => {
            return <Login {...routerProps} handleLoginSubmit={this.handleLoginSubmit} handleLoginChange={this.props.handleLoginChange} />;
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
      <Route path="/Portfolio" component={Portfolio}/>
    </Switch>
    </div>
  );
}
}

export default withRouter(App)
