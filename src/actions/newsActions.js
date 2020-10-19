
import {FETCH_NEWS} from './types'
import moment from 'moment'
let API_KEY = process.env.REACT_APP_NEWS_API_KEY




export const fetchNews = (symbol) => dispatch => {

  let date= moment().format('YYYY-MM-DD');


  console.log(reformattedDate)
  let URL = `http://newsapi.org/v2/everything?q=${symbol}&from=${date}&sortBy=publishedAt&apiKey=${API_KEY}` 
  debugger
  console.log('fetching news...')
  
    fetch(URL)
    .then(res => res.json())
    .then(newsArticles => 
      dispatch({
        type: FETCH_NEWS,
        payload: newsArticles
    })
    )
}

