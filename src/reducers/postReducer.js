import {FETCH_POSTS, NEW_POST} from '../actions/types'

const initialState = {
  //represents items coming in from action.
  items: [],
  item: {}
  //item represents a single post that we add.
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_POSTS:
      console.log('reducer')
      return {
        ...state,
        items: action.payload
      }
      case NEW_POST:
      return {
        ...state,
        item: action.payload
      }
    default: 
      return state;
  }
}