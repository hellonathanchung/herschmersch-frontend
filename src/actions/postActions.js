import {FETCH_POSTS, NEW_POST, DELETE_POST, UPDATE_POST} from './types'

let url = "https://herschmerch-api.herokuapp.com/api/v1/"
export const fetchPosts = () => dispatch => {

  
    fetch(`${url}posts`)
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
  fetch(`${url}posts`, {
    method: 'POST',
    headers: {
      'content-type':'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(postData)
  }).then((res) => res.json())
  .then(post => {
    if (!post.error) {

      dispatch({
        type: NEW_POST,
        payload: post})
      }
      else
      {
        alert(post.error);
        return (post.error)
      }
    }
  )
console.log("Post has been created")
}
export const updatePost = (event, postId, postData, token) => dispatch => {

  console.log('updating a post...')

debugger
  console.log(`${url}posts/${postId}`)
  fetch(`${url}${postId}`, {
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

  fetch(`${url}posts/${postId}`, {
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
