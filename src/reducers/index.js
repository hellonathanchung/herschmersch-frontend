import { combineReducers } from "redux";
import postReducer from "./postReducer";
import loginReducer from "./loginReducer";
import tickerReducer from "./tickerReducer";
import stockReducer from "./stockReducer";
import stockListReducer from "./stockListReducer";
import newsReducer from "./newsReducer";

export default combineReducers({
  posts: postReducer,
  user: loginReducer,
  tickers: tickerReducer,
  stocks: stockReducer,
  stockList: stockListReducer,
  newsArticles: newsReducer,
});
