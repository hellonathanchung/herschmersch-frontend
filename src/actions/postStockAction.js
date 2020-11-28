import {ADD_POST_STOCK, REMOVE_POST_STOCK} from './types'

export const addPostStock = (event, stocks) => dispatch =>  {
  let url = "https://herschmerch-api.herokuapp.com/api/v1/"

  fetch(`${url}list_stocks`, {
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

