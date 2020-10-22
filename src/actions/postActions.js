import {FETCH_POSTS, NEW_POST, DELETE_POST, UPDATE_POST} from './types'

export const fetchPosts = () => dispatch => {
  console.log('fetching...')
  
    fetch('http://localhost:3000/api/v1/posts')
    .then(res => res.json())
    .then(posts => 
      dispatch({
        type: FETCH_POSTS,
        payload: posts
    })
    )
}
export const createPost = (postData, token) => dispatch => {

  console.log('adding a post...')
  fetch('http://localhost:3000/api/v1/posts', {
    method: 'POST',
    headers: {
      'content-type':'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(postData)
  }).then((res) => res.json())
  .then(post =>
    dispatch({
    type: NEW_POST,
    payload: post})
  )
console.log("Post has been created")
}
export const updatePost = (event, postId, postData, token) => dispatch => {

  console.log('updating a post...')
  fetch(`http://localhost:3000/api/v1/posts/${postId}`, {
    method: 'PATCH',
    headers: {
      'content-type':'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(postData)
  }).then((res) => res.json())
  .then(post =>
    dispatch({
    type: UPDATE_POST,
    payload: post})
  )
console.log("Post has been created")
}

export const deletePost = (e, postId) => dispatch =>  {

  fetch(`http://localhost:3000/api/v1/posts/${postId}`, {
    method: 'DELETE',
    headers: {
      'content-type':'application/json',
      'Authorization': `Bearer ${localStorage.token}`
    },
 }).then((res) => res.json())
 .then(data =>
  dispatch({
    type: DELETE_POST,
    payload: postId 
  }))

  console.log("Post has been deleted")
}
