import {FETCH_STOCKS} from '../actions/types'

const initialState = {
  //represents items coming in from action.
  stocks: [],
  stock: {}
  //item represents a single post that we add.
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_STOCKS:
      console.log("reducer",'fetching_stocks')
      return {
        ...state,
        stocks: action.payload
      }
    default: 
      return state;
  }
}

