import React from 'react';
import api from '../services/api'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createPost } from '../actions/postActions'


class PostForm extends React.Component{

  state = {
    title: "",
    content: "",
    user_id: this.props.user.id,
    token:this.props.token
  };

  handleFormChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handlePostSubmit = (event) => {
    console.log('post submit pressed')
    event.preventDefault();
    const newPostData = {
      title: this.state.title,
      content:this.state.content,
      user_id: this.props.user.id    
    }
// this is where we need to add redux
this.props.createPost(newPostData, this.state.token)
this.props.history.push('/posts')
event.target.reset()
}
  render () {
    console.log(this.state)
    return (
      <div>
      <h2>Add a Post</h2>
      <div className="ui one column stackable center aligned page grid">
      <form className="column twelve wide"
      onChange={(e) => this.handleFormChange(e)}
      onSubmit={(e) => this.handlePostSubmit(e)}
      >
        <div className="ui form">
          <div className="field">
          <label>Title</label>
          <input name="title" type="text" />
          <label>Content</label>
          <textarea name="content"/>
    <br/>
    <button className="ui-button">Add Post</button>
    </div>
    </div>
    </form>
      </div>
</div>
    )
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
}
export default connect(null, {createPost})(PostForm)