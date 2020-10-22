import {FETCH_POSTS, NEW_POST, DELETE_POST, UPDATE_POST} from '../actions/types'

const initialState = {
  //represents items coming in from action.
  postItems: [],
  postItem: []
  //post represents a single post that we add.
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        postItems: action.payload
      }
      case NEW_POST:
      return {
        ...state,
        postItems: [...state.postItems, action.payload.reverse()],
      }
      case DELETE_POST:
      return {
        ...state,
        postItems: [...state.postItems.filter(postItem => postItem.id !== parseInt(action.payload))]
      }
      case UPDATE_POST:
        let updatedPostItems = [...state.postItems.filter(postItem => postItem.id !== parseInt(action.payload.id)), action.payload]
      return {
        ...state,
        postItems: updatedPostItems.reverse()
      }
    default: 
      return state;
  }
}