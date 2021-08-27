import { FETCH_STOCKS, LOADING_STOCKS } from "../actions/types";

const initialState = {
  stocks: [],
  stockName: "Amazon",
  stockSymbol: "AMZN",
  stockXValues: [],
  stockYValues: [],
  currentPrice: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING_STOCKS:
      return {
        ...state,
        stocks: [...state.stocks],
        loading: true,
      };
    case FETCH_STOCKS:
      return {
        ...state,
        stockSymbol: action.payload.symbol,
        stockName: action.payload.name,
        stockXValues: action.payload.stockChartXValues,
        stockYValues: action.payload.stockChartYValues,
        currentPrice: action.payload.stockChartYValues[0],
        loading: false,
      };
    default:
      return state;
  }
}
