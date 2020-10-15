import {FETCH_POSTS, NEW_POST, DELETE_POST} from '../actions/types'

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
        postItems: [...state.postItems, action.payload],
      }
      case DELETE_POST:
        debugger
      return {
        ...state,
        postItems: [...state.postItems.filter(postItem => postItem.id !== parseInt(action.payload))]
      }
    default: 
      return state;
  }
}