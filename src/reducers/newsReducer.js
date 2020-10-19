import {FETCH_NEWS} from '../actions/types'

const initialState = {
  //represents items coming in from action.
  newsArticles: {},
  //item represents a single post that we add.
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_NEWS:
      return {
        ...state,
        newsArticles: action.payload
      }
    default: 
      return state;
  }
}

