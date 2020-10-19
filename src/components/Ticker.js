import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchTickers } from '../actions/tickerActions'
import {fetchNews } from '../actions/newsActions'
import { fetchStocks } from '../actions/stockActions'
import { addStockToList } from '../actions/stockListActions'
import { Button, Modal } from 'semantic-ui-react'
import StockChart from './StockChart'
import News from './News'




class Ticker extends Component {

  componentDidMount() {
    if (this.props.tickers.tickers !== [] ) {
      this.props.fetchTickers()
    }
    }


render () {
  const tickerItems = this.props.tickers.map(ticker => 
      <div className="ui raised link card" onMouseEnter={(e)=> {
        this.props.fetchStocks(ticker.symbol)
        this.props.fetchNews(ticker.symbol)}}>
        <div className="description">{ticker.name}</div>
        <div div  className="description">{ticker.symbol}</div>
      <Button secondary onClick={(e)=> {
        this.props.addStockToList(e, ticker.name, ticker.symbol);
        }} className="ui button"> Add Stock </Button>
      <Modal 
        trigger={<Button red>View More </Button>}
        header={ticker.name}
        >
        <StockChart symbol={ticker.symbol}/>
        <Modal.Content image scrolling>
          <News name={ticker.name} symbol={ticker.symbol} />
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={(e)=> {
        this.props.addStockToList(e, this.props.ticker.name, this.props.ticker.symbol);
        }}> Add Stock</Button>
        </Modal.Actions>
      </ Modal>
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

export default connect( mapStateToProps, {fetchStocks, addStockToList, fetchTickers, fetchNews })(Ticker)