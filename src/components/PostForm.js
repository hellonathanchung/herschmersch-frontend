import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createPost, updatePost } from '../actions/postActions'
import {withRouter} from 'react-router-dom'
import { Button } from 'semantic-ui-react'



class PostForm extends React.Component{

  
  state = {
    title: "",
    content: "",
    editMode: false
  };

  componentDidMount () {

    if (this.props.postData)
      {this.setState(
        {title: this.props.postData.title,
        content: this.props.postData.content,
        editMode: true})}
    }

  handleFormChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleEditMode = () => {
    let editMode = this.state.editMode
    this.setState({
      editMode: !editMode
    })
  }

  handlePostSubmit = (event) => { 
    event.preventDefault();

    if (this.state.editMode) {
      const {id, title, content} = this.props.postData 
    } 


    const newPostData = {
      title: this.state.title,
      content:this.state.content,
      user: this.props.user,
      user_id: this.props.user_id
    }

      this.state.editMode ?
      this.props.updatePost(event, this.props.postData.id, newPostData, localStorage.token) : this.props.createPost( newPostData, localStorage.token)
      this.props.history.push('/posts')
      this.props.handlePostClick()    

}
  render () {
    const {editMode, post} = this.state;
    const buttonTitle = editMode ? 'Edit a Post' : 'Create a Post';
    const postTitle = editMode ? 'Update' : 'Create';
    return (
      <div>
      <h2>{postTitle} a Post</h2>
      <div className="ui one column stackable center aligned page grid">
      <form className="column twelve wide"
      onChange={(e) => this.handleFormChange(e)}
      onSubmit={(e) => this.handlePostSubmit(e)}
      >
        <div className="ui form">
          <div className="field">
          <label>Title</label>
          <input name="title" type="text" value={this.state.title} placeholder={this.state.title} />
          <label>Content</label >
          <textarea  placeholder={this.state.content} value={this.state.content} name="content"/>
    <br/>
    <Button className="ui-button">{buttonTitle}</Button>
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
const mapStateToProps = (state) => {
  return {user_id: state.user.user_id}
}
export default connect(mapStateToProps, {createPost, updatePost})(withRouter(PostForm))