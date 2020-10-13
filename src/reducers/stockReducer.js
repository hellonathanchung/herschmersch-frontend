import {FETCH_STOCKS} from '../actions/types'

const initialState = {
  //represents items coming in from action.
  stocks: [],
  stock: {},
  stockSymbol:"",
  stockXValues:[],
  stockYValues:[]
  //item represents a single post that we add.
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_STOCKS:
      console.log("reducer",'fetching_stocks')
      return {
        ...state,
        stockSymbol: action.payload.symbol,
        stockXValues: action.payload.stockChartXValues,
        stockYValues: action.payload.stockChartYValues
      }
    default: 
      return state;
  }
}

