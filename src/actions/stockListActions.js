import {ADD_STOCK_TO_LIST, REMOVE_STOCK_FROM_LIST, LOADING_STOCK_LIST} from './types'

const API_ROOT = `https://herschmerch-api.herokuapp.com/api/v1/`;

export const addStockToList = (event, stockListData) => dispatch =>  {
  console.log(stockListData)

  let stockListInformation = {
    name: stockListData.name,
    symbol: stockListData.symbol,
    list_id: 1,
    initialCost: stockListData.initialCost,
    shares: stockListData.shares
  }
  dispatch({type: LOADING_STOCK_LIST})
  fetch(`${API_ROOT}list_stocks`, {
    method: 'POST',
    headers: {
      'content-type':'application/json',
      'Authorization': `Bearer ${localStorage.token}`
    },
    body: JSON.stringify(stockListInformation)
  }).then((res) => res.json())
    .then(stockData =>{

      if (!stockData.error) {
        
        dispatch({
          type: ADD_STOCK_TO_LIST,
          payload: stockData})
        } else {
          alert(stockData.error);
          return (stockData.error)
        }
        }
)
  }

export const removeStockFromList = (e, stockId) => dispatch =>  {
  dispatch({type: LOADING_STOCK_LIST})
  fetch(`${API_ROOT}list_stocks/${stockId}`, {
    method: 'DELETE',
    headers: {
      'content-type':'application/json',
      'Authorization': `Bearer ${localStorage.token}`
    },
}).then((res) => res.json())
.then(data =>
  dispatch({
    type: REMOVE_STOCK_FROM_LIST,
    payload: stockId 
  }))
}
