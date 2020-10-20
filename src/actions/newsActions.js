
import {FETCH_NEWS, LOADING_NEWS} from './types'
import moment from 'moment'
let API_KEY = process.env.REACT_APP_STOCK_API_KEY


export const fetchNews = (symbol) => dispatch => {
console.log(API_KEY)
dispatch({type: LOADING_NEWS})
let URL = `https://stocknewsapi.com/api/v1?tickers=${symbol}&items=50&token=${API_KEY}` 
fetch(URL)
.then(res => res.json())
.then(newsArticles => 
  dispatch({
    type: FETCH_NEWS,
    payload: newsArticles.data
  })
  )
}

// let date= moment().format('YYYY-MM-DD');
  // let URL = `http://newsapi.org/v2/everything?q=${symbol}&from=${date}&sortBy=publishedAt&apiKey=${API_KEY}` 