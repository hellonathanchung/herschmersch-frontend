import React, { Component } from 'react';
import PostForm from  "../components/PostForm"
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/postActions'
import { Button, Modal } from 'semantic-ui-react'


class PostContainer extends Component {

  componentDidMount() {
  this.props.fetchPosts()
  }
  
  render () {
    
    const postItems = this.props.posts.map(post => 
      <div className="ui raised very padded text container segment" key={post.id}>
        <h2 className="ui header">{post.title}</h2>
        <h4 className="ui header"> {post.user.full_name}</h4>
        <h4 className="ui header"> {post.user.full_name}</h4>
        <Button> Add Stock </Button>
        <p>{post.content}</p>
      </div>)

    return(
      <div>
      <PostForm/>
      {postItems}
    </div>
  )
}
}

const mapStateToProps = (state) => {
return {posts: state.posts.postItems}
}


export default connect(mapStateToProps, { fetchPosts })(PostContainer)