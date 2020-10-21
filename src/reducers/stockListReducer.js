import {LOADING_STOCK_LIST,INITIAL_STOCK_LIST, ADD_STOCK_TO_LIST, REMOVE_STOCK_FROM_LIST } from '../actions/types'

const initialState = {
  stockList: [],
  loading: false
}

export default function(state = initialState, action) {
  
  switch(action.type) {
    case LOADING_STOCK_LIST:
      return {
        ...state,
        stockList: [...state.stockList],
        loading:true
      }
    case INITIAL_STOCK_LIST:
      return {
        ...state,
        stockList: action.payload,
        loading:false
      }
    case ADD_STOCK_TO_LIST:
      return {
        ...state,
        stockList: [...state.stockList, action.payload],
        loading:false
      }
    case REMOVE_STOCK_FROM_LIST:
        return {
          ...state,
          stockList: [...state.stockList.filter(stock => stock.id !== parseInt(action.payload))],
          loading:false
        }
    default: 
      return state;
  }
}

