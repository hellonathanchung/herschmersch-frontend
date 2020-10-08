import React from 'react';
import './App.css';
import Stock from './containers/Stock'
// import News from './components/News'

class App extends React.Component {
  state = {
    articles: []
  };
  
  componentDidMount() {
    let NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY
  const url = `http://newsapi.org/v2/everything?q=stocks&from=2020-09-07&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`;
  fetch(url)
      .then((response) => response.json())
      .then(articles => this.setState({articles : articles.articles}))
  
      
}

render(){

  console.log(this.state.articles)
  return (
    <div className="App">
      <h1>HerschMersch</h1>
      <Stock />
      {/* <News articles={this.state.articles} /> */}
    </div>
  );
}
}

export default App;
