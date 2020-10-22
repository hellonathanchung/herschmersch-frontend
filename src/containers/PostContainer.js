import React, { Component } from 'react';
import PostForm from  "../components/PostForm"
import { connect } from 'react-redux'
import { fetchPosts, deletePost } from '../actions/postActions'
import { Button, Modal } from 'semantic-ui-react'


class PostContainer extends Component {

state = {
  clicked: false
}
  componentDidMount() {
  this.props.fetchPosts()
  }

  handlePostClick = (e) => {
    this.setState({
      clicked: !this.state.clicked}
    )}

  handleEditClick = (e) => {
    console.log(e)
  }
  
  render () {

    
    const postItems = this.props.posts.map(post => 
      <div className="ui raised very padded text container segment" key={post.id}>
        <h2 >{post.title}</h2>
        <h4 >  Post by: {post.user.username}</h4>
        <p>{post.content}</p>
        {post.stocks.length > 0?
        <div> <h1>Stocks</h1>
          <div className="ui cards"></div> 
        {post.stocks.map(stock =>
        <div className=" card">
          <div className="content">{stock.name}</div>
          <div className="content">{stock.symbol} </div> 
        </div>
          
          )}</div>: null}

        
        <Modal
      trigger={<Button red> Edit Post </Button>}
      content= {<PostForm 
        handlePostClick={this.handleEditClick}
        postData={post}  />}
    /> 
    
    <Button onClick={(e) => this.props.deletePost(e, post.id)}>Delete Post </Button>
      </div>)

    
    return(
      <div>
        {this.state.clicked === false?
        <Button onClick={(e) => this.handlePostClick(e) }> Add a post </Button>:(
        <PostForm handlePostClick={this.handlePostClick} />)}
      {postItems} 
    </div>
  )
}
}

const mapStateToProps = (state) => {
return {posts: state.posts.postItems}
}


export default connect(mapStateToProps, { fetchPosts, deletePost })(PostContainer)