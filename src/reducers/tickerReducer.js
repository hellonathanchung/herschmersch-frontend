import {FETCH_TICKERS, ADD_LIST_STOCK} from '../actions/types'

const initialState = {
  //represents items coming in from action.
  tickers: [],
  ticker: {}
  //item represents a single post that we add.
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_TICKERS:
      return {
        ...state,
        tickers: action.payload
      }
      case ADD_LIST_STOCK:
      return {
        ...state,
        ticker: action.payload
      }
    default: 
      return state;
  }
}

