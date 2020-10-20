import {FETCH_STOCKS} from './types'
let API_KEY = process.env.REACT_APP_MARKETSTACK_API_KEY

export const fetchStocks = (newSymbol, stockName) => dispatch =>  {
  let stockChartX = []
  let stockChartY = []
  let revStockChartX = stockChartX.reverse()
  let revStockChartY = stockChartY.reverse()
  let currentCost= 0

  let stockTicker = newSymbol
  let URL = `http://api.marketstack.com/v1/eod?access_key=${API_KEY}&symbols=${stockTicker}`
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
    symbol: newSymbol,
    name: stockName,
    stockChartXValues: revStockChartX,
    stockChartYValues: revStockChartY,
  }
  }

