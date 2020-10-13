import {ADD_STOCK_TO_LIST } from '../actions/types'

const initialState = {
  //represents items coming in from action.
  stock_lists: [],
  //item represents a single post that we add.
}

export default function(state = initialState, action) {
  switch(action.type) {
      case ADD_STOCK_TO_LIST:
      return {
        ...state,
        ticker: action.payload
      }
    default: 
      return state;
  }
}

