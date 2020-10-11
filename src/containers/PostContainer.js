import React, { Component } from 'react';
// import PostForm from  "../components/PostForm"
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/postActions'


class PostContainer extends Component {

  componentDidMount() {
    console.log("hello")
  this.props.fetchPosts()
  }
  
  render () {
    const postItems = this.props.posts.map(post => 
      <div className="ui raised very padded text container segment" key={post.id}>
        <h2 className="ui header">{post.title}</h2>
        <p>{post.body}</p>
      </div>)

    return(
      <div>
       {/* <PostForm/> */}
      {postItems}
    </div>
  )
}
}

const mapStateToProps = (state) => {
return {posts: state.posts.items}
}


export default connect(mapStateToProps, { fetchPosts })(PostContainer)