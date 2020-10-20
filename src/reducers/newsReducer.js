import {FETCH_NEWS, LOADING_NEWS} from '../actions/types'

const initialState = {
  newsArticles: [],
  loading: false
}

export default function(state = initialState, action) {
  
  switch(action.type) {
    case LOADING_NEWS:
      return {
        ...state,
        newsArticles: action.payload,
        loading:true
      }
    case FETCH_NEWS:
      return {
        newsArticles: action.payload,
        loading: false
      }
    default: 
      return state;
  }
}

