
import {FETCH_NEWS} from './types'
let API_KEY = process.env.REACT_APP_NEWS_API_KEY
import moment from 'react-moment';


export const fetchNews = (symbol) => dispatch => {
  
let date =  moment().format("DD-MM-YYYY hh:mm:ss")
  console.lo(date)
  // let ticker = property passed down
  let URL = `http://newsapi.org/v2/everything?q=${symbol}&from=2020-10-10&sortBy=publishedAt&apiKey=${API_KEY}` 
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

