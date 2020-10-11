import React from 'react';
import api from '../services/api'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createPost } from '../actions/postActions'


class PostForm extends React.Component{

  state = {
    title: "",
    content: "",
  };

  handleFormChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    console.log('post submit pressed')
    event.preventDefault();
    const newPostData = {
      title: this.state.title,
      content:this.state.content,
      user_id: 23
      
    }
// this is where we need to add redux
this.props.createPost(newPostData)  }
  render () {

    return (
    <div className="ui one column stackable center aligned page grid">
      <form className="column twelve wide"
      onChange={(e) => this.handleFormChange(e)}
      onSubmit={(e) => this.handleSubmit(e)}
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
    )
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
}
export default connect(null, {createPost})(PostForm)