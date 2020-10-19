import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchNews } from "../actions/newsActions";


class News extends Component {


  componentDidMount() {
    debugger
    this.props.fetchNews(this.props.symbol)
  }
  
  
  render() {
    
    return (
      <h1>News</h1>
    )
    }
  }
    const mapStateToProps = (state) => {
      
      return{
        newsArticles: state.newsArticles
      }
    }
  export default connect(mapStateToProps, { fetchNews })(News)