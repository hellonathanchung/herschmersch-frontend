import React from 'react';
import './App.css';
import Stock from './containers/Stock'
import PostContainer from './containers/PostContainer'
import Login from "./containers/Login";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

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
      <h1>HerschMersch</h1>
      <Login/>
      {/* <PostContainer/>
      <Stock /> */}
      {/* <News articles={this.state.articles} /> */}
    </div>
  );
}
}

export default App;
