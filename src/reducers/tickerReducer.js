import {FETCH_TICKERS, ADD_LIST_STOCK} from '../actions/types'

const initialState = {
  //represents items coming in from action.
  items: [],
  item: {}
  //item represents a single post that we add.
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_TICKERS:
      console.log('reducer')
      return {
        ...state,
        items: action.payload
      }
      case ADD_LIST_STOCK:
      return {
        ...state,
        item: action.payload
      }
    default: 
      return state;
  }
}