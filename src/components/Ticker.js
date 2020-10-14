import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchTickers } from '../actions/tickerActions'
import { fetchStocks } from '../actions/stockActions'
import { addStockToList } from '../actions/stockListActions'
import { Button, Modal } from 'semantic-ui-react'
import StockChart from './StockChart'



class Ticker extends Component {


  componentDidMount() {
    this.props.fetchTickers()
    }

    
render () {

  const tickerItems = this.props.tickers.map(ticker => 
      <div className="ui raised link card" onMouseEnter={(e)=> this.props.fetchStocks(ticker.symbol)}>
        <div className="description">{ticker.name}</div>
        <div div  className="description">{ticker.symbol}</div>
      <Button onClick={(e)=> this.props.addStockToList(e, ticker.name, ticker.symbol)} className="ui button"> Add Stock </Button>
      <Modal
      trigger={<Button primary>View More </Button>}
      header={ticker.name}
      content= {<StockChart symbol={ticker.symbol}/>}
      actions={['Add Stock', { key: 'done', content: 'Done', positive: true }]}
    />
    </div>
  )
  return (
    <div>
      
    <h1>Tickers</h1>
    <div className="ui cards">
    {tickerItems}
    </div>
    </div>
    )
  
}
}


const mapStateToProps = (state) => {
        return {
          tickers: state.tickers.tickers
        }
}

export default connect( mapStateToProps, {fetchStocks, addStockToList, fetchTickers })(Ticker)