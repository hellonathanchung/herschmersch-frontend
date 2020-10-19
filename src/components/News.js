import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchNews } from "../actions/newsActions";


class News extends Component {


componentDidMount() {
this.props.fetchNews(this.props.symbol)
console.log(this.props)

  }

  render() {
    
    let testItem = this.props.newsArticle? "hello" : "false"
    return (
      <div>

      <h1>News</h1>
      {testItem}
      </div>
    )
    }
  }
    const mapStateToProps = (state) => {
      
      return{
        newsArticles: state.newsArticles.articles
      }
    }
  export default connect(mapStateToProps, { fetchNews })(News)