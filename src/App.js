import React from 'react';
import Header from "./components/Header";

import './App.css';
import Stock from './containers/Stock'
import PostContainer from './containers/PostContainer'
import Login from "./containers/Login";
import { BrowserRouter as Router, Link, NavLink, Route, Switch } from "react-router-dom";


// import News from './components/News'
class App extends React.Component {

handleLogin = (e) => {
  console.log('login')
}

// renderLoginPage = () => {<Login handleLoginOrSignup={this.handleLogin} />}

//   componentDidMount(){
//   //   let NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY
//   // const url = `http://newsapi.org/v2/everything?q=stocks&from=2020-09-07&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`;
//   // fetch(url)
//   //     .then((response) => response.json())
//   //     .then(articles => this.setState({articles : articles.articles}))
// }

render() {

  return (
    <div className="App">
      <Router>
        <Header
          handleLogout={this.handleLogout}
          handleSearch={this.handleSearch}
        />
      <Switch path="/login"> 
        <Login/>
      </Switch>
        <Switch path="/stocks"> 
       <Stock />
      </Switch>
      {/* <PostContainer/>*/}
    
      {/* <News articles={this.state.articles} /> */}
      </Router>
    </div>
  );
}
}

export default App;
