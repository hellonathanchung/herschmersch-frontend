import {FETCH_TICKERS, ADD_LIST_STOCK, LOADING_TICKERS} from '../actions/types'

const initialState = {
  //represents items coming in from action.
  tickers: [],
  ticker: {},
  loading:false
  //item represents a single post that we add.
}

export default function(state = initialState, action) {
  switch(action.type) {
    case LOADING_TICKERS:
    return {
      ...state,
      tickers: [...state.tickers],
      loading: true
    }
    case FETCH_TICKERS:
      return {
        ...state,
        tickers: action.payload,
        loading: false
      }
      case ADD_LIST_STOCK:
      return {
        ...state,
        ticker: action.payload,
        loading: false

      }
    default: 
      return state;
  }
}

