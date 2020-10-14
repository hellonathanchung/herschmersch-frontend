import {ADD_STOCK_TO_LIST, REMOVE_STOCK_FROM_LIST } from '../actions/types'

const initialState = {
  //represents items coming in from action.
  stockLists: [],
  //item represents a single post that we add.
}

export default function(state = initialState, action) {
  
  switch(action.type) {
      case ADD_STOCK_TO_LIST:
      return {
        ...state,
        stockLists: action.payload
      }
      // case REMOVE_STOCK_FROM_LIST:{
      //   const list = state.user.userStocks.filter(
      //     (userStock) => userStock.id !== parseInt(action.payload)
      //     return {
      //       ...state,
      //       user: {
      //         userStocks: action.payload
      //       }
      //     })
    default: 
      return state;
  }
}

