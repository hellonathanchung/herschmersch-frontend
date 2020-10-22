import {ADD_POST_STOCK, REMOVE_POST_STOCK} from './types'

export const addPostStock = (event, stocks) => dispatch =>  {
  console.log(stockListData)


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
    type: ADD_POST_STOCK,
    payload: stockData})
)
  }

