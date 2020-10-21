import {ADD_STOCK_TO_LIST, REMOVE_STOCK_FROM_LIST, LOADING_STOCK_LIST} from './types'


export const addStockToList = (event, stockListData) => dispatch =>  {
  console.log(stockListData)

  let stockListInformation = {
    name: stockListData.name,
    symbol: stockListData.symbol,
    list_id: 17,
    initialCost: stockListData.initialCost,
    shares: stockListData.shares
  }
  dispatch({type: LOADING_STOCK_LIST})
  fetch('http://localhost:3000/api/v1/list_stocks', {
    method: 'POST',
    headers: {
      'content-type':'application/json',
      'Authorization': `Bearer ${localStorage.token}`
    },
    body: JSON.stringify(stockListInformation)
  }).then((res) => res.json())
    .then(stockData =>
    dispatch({
    type: ADD_STOCK_TO_LIST,
    payload: stockData})
)
  }

export const removeStockFromList = (e, stockId) => dispatch =>  {
  dispatch({type: LOADING_STOCK_LIST})
  fetch(`http://localhost:3000/api/v1/list_stocks/${stockId}`, {
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
