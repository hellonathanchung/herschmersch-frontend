import React from 'react';
import api from '../services/api'


class PostForm extends React.Component{

  state = {
    title: "",
    content: "",
  };

  handleFormChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      title: this.state.title,
      body:this.state.content
    }

    api.post.newPost(newPost)
  }
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

export default PostForm