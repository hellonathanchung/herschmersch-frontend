import {FETCH_STOCKS} from '../actions/types'

const initialState = {
  //represents items coming in from action.
  stocks: [],
  stockSymbol:"AMZN",
  stockXValues:[],
  stockYValues:[]
  //item represents a single post that we add.
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_STOCKS:
      return {...state,
        stockSymbol: action.payload.symbol,
        stockXValues: action.payload.stockChartXValues,
        stockYValues: action.payload.stockChartYValues
      }
    default: 
      return state;
  }
}

