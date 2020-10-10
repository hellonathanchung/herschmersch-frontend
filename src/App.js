import React from 'react';
import './App.css';

// containers
import PostContainer from './containers/PostContainer'
import Portfolio from './containers/Portfolio'

//components
import Signup from './components/Signup'
import StockContainer from './containers/StockContainer'
import Header from "./components/Header";
import Login from "./containers/Login";
import { BrowserRouter as Router, Link, NavLink, Route, Switch, withRouter } from "react-router-dom";


// import News from './components/News'
class App extends React.Component {

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
    <Header handleLogout={this.handleLogout} handleSearch={this.handleSearch}/>
    <Switch>
      <Route path="/login" component={Login}/> 
      <Route path="/signup" component={Signup}/> 
      <Route path="/stocks" component={StockContainer}/> 
      <Route path="/Portfolio" component={Portfolio}/> 
    </Switch>
    </div>
  );
}
}

export default withRouter(App)
