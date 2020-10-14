import {INITIAL_STOCK_LIST, ADD_STOCK_TO_LIST, REMOVE_STOCK_FROM_LIST } from '../actions/types'

const initialState = {
  //represents items coming in from action.
  stockList: [],
  //item represents a single post that we add.
}

export default function(state = initialState, action) {
  
  switch(action.type) {
    case INITIAL_STOCK_LIST:
      return {
        ...state,
        stockList: action.payload
      }
      case ADD_STOCK_TO_LIST:
      return {
        ...state,
        stockList: [...state.stockList, action.payload]
      }
      case REMOVE_STOCK_FROM_LIST:
        return {
          ...state,
          stockList: [...state.stockList.filter(stock => stock.id !== parseInt(action.payload))]
        }
    default: 
      return state;
  }
}

