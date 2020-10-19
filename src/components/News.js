import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchNews } from "../actions/newsActions";


class News extends Component {


componentDidMount() {
this.props.fetchNews(this.props.symbol)
  }
  render() {
    
    
    return (
      <div>

      <h1>News</h1>
      {/* {newsArticles} */}
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