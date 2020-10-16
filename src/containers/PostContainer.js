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
    console.log(e)
    this.setState({
      clicked: !this.state.clicked}
    )}
  
  render () {
    
    const postItems = this.props.posts.map(post => 
      <div className="ui raised very padded text container segment" key={post.id}>
        <h2 className="ui header">{post.title}</h2>
        <h4 className="ui header"> Post by: {post.user.username}</h4>
        <p>{post.content}</p>
        <Button> Edit Post </Button>
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