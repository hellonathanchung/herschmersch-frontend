import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Modal } from 'semantic-ui-react';
import { fetchNews } from "../actions/newsActions";
import {Button} from 'semantic-ui-react'


class News extends Component {


componentDidMount() {
this.props.fetchNews(this.props.symbol)
}

  render() {
    // while loading news articles
//     // <div class="ui segment">
//   <div class="ui active loader"></div>
//   <p></p>
//  </div>
    
 const articles = this.props.newsArticles.map(article =>
  <>
  <Modal className = "ui header">{article.title}</Modal>
  <Modal.Description>
    

    </Modal.Description>
  <Modal.Content>
    <div className="ui two column centered grid">
      <div className="row">
        <div className="column">
          <img className="ui small image" src={article.image_url}/>
      </div>
        <div className="column">
          <h1>{article.source_name}</h1>
          <h3>Sentiment: {article.sentiment} </h3>
          <h4>{article.text} </h4>
          <Button onClick={(e) => (window.location = article.news_url)} >View More Information</Button>
        </div>
      </div>
      <div>

      </div>
    </div>
  </Modal.Content>
  <div className="ui divider">
    
  </div>

  </>
  )
    return (
      <div>
      <h1>News</h1>
      <div className="scrolling content">
      {articles}
      </div>
      </div>
    )
    }
  }
    const mapStateToProps = (state) => {
      
      return{
        newsArticles: state.newsArticles.newsArticles,
        loading: state.newsArticles.loading
      }
    }
  export default connect(mapStateToProps, { fetchNews })(News)