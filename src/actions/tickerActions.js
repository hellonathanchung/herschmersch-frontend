import {FETCH_TICKERS} from './types'

let API_KEY = process.env.REACT_APP_MARKETSTACK_API_KEY

export const fetchTickers = () => dispatch => {
  console.log('fetching tickers...')
  
    fetch(`http://api.marketstack.com/v1/tickers?access_key=${API_KEY}`)
    .then(res => res.json())
    .then(tickers => 
      dispatch({
        type: FETCH_TICKERS,
        payload: tickers.data
    })
    )
}

