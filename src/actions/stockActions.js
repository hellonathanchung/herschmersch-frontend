import {FETCH_STOCKS} from './types'

export const fetchStocks = () => dispatch =>  {
  let API_KEY = process.env.REACT_APP_MARKETSTACK_API_KEY
  const pointerToThis = this;
  let stockTicker = 'MSFT'
  let URL = `http://api.marketstack.com/v1/eod?access_key=${API_KEY}&symbols=${stockTicker}`
  let stockChartX = []
  let stockChartY = []

  fetch(URL)
  .then(res => res.json())
  .then( function(stockData) {console.log(stockData);
      stockData.data.map( stockDate => {
          stockChartX.push(stockDate.date)
          stockChartY.push(stockDate.high)}
      )
      dispatch({
        type: FETCH_STOCKS,
        payload: stockInformation
      })}
  )
  const stockInformation = {
    symbol: stockTicker,
    stockChartXValues: stockChartX,
    stockChartYValues: stockChartY
  }
 
  }

