const initialState = {
  user: {},
  isFetching: false,
  isError: false,
  articles: {},
  stockData:{},
  postLikes: 0
}
//     const asyncReducer = (state = initialState, action) => {
//       return state;
//     };
    
//     export default asyncReducer;


// state = {
//   stockName: "",
//   stockChartXValues: [],
//   stockChartYValues: [],
//   stockData: {}
// }


// const stockDataReducer = (state=initialState, action) => {
export const likeReducer = (state=initialState, action) => {
  switch(action.type){
    case 'ADD_LIKE':{
      console.log('Like added')
    }
    default:
      return state
  }
}

  