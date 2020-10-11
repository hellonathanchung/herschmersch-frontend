import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";


// const initialState = {
//   // user: {},
//   // isFetching: false,
//   // isError: false,
//   // posts:{},
//   // articles: {},
//   // stockData:{},
//   // tickers: {},
// }

const initialState = {};

const middleware = [thunk]

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
  
);

export default store;