
import {FETCH_NEWS} from './types'
let API_KEY = process.env.REACT_APP_NEWS_API_KEY

export const fetchNews = () => dispatch => {
  // let ticker = property passed down
  let URL = `http://newsapi.org/v2/everything?q=${ticker}&from=2020-09-19&sortBy=publishedAt&apiKey=28359d5ef88b4fb59cf77b57169c3c31`
  console.log('fetching news...')
  
    fetch(`${URL}${API_KEY}`)
    .then(res => res.json())
    .then(news => 
      dispatch({
        type: FETCH_NEWS,
        payload: news
    })
    )
}

