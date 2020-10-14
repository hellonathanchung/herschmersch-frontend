import {ADD_STOCK_TO_LIST, REMOVE_STOCK_FROM_LIST} from './types'


export const addStockToList = (e,name, symbol) => dispatch =>  {
  console.log('dispatch to list')
  console.log(name, symbol)

  let stockListInformation = {
    name: name,
    symbol: symbol,
    list_id: 17,
    initial_cost: 40
  }
  fetch('http://localhost:3000/api/v1/list_stocks', {
    method: 'POST',
    headers: {
      'content-type':'application/json',
      'Authorization': `Bearer ${localStorage.token}`
    },
    body: JSON.stringify(stockListInformation)
  }).then((res) => res.json())
.then(post =>
  dispatch({
  type: ADD_STOCK_TO_LIST,
  payload: stockListInformation})
)
  }

export const removeStockFromList = (e, stockId) => dispatch =>  {

  fetch(`http://localhost:3000/api/v1/list_stocks/${stockId}`, {
    method: 'DELETE',
    headers: {
      'content-type':'application/json',
      'Authorization': `Bearer ${localStorage.token}`
    },
 }).then((res) => res.json())
.then(post =>
  dispatch({
  type: REMOVE_STOCK_FROM_LIST,
  }))

  // need to include list_portfolio:"Portfolio" 



}

