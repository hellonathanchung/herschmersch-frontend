import {FETCH_NEWS} from '../actions/types'

const initialState = {
  newsArticles: {},
}

export default function(state = initialState, action) {
  
  switch(action.type) {
    case FETCH_NEWS:
      return {
        newsArticles: action.payload
      }
    default: 
      return state;
  }
}

