import React from 'react';
import {connect} from 'react-redux'

const PostContainer = (props) => {
console.log(props)
  return(

    <div>
    <button >❤</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    postLikes : state.postLikes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addLike: (id) => dispatch(id)
  }
}
export default connect (mapStateToProps)(PostContainer)