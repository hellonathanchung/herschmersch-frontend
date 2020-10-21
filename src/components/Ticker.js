import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchTickers } from '../actions/tickerActions'
import {fetchNews } from '../actions/newsActions'
import { fetchStocks } from '../actions/stockActions'
import { addStockToList } from '../actions/stockListActions'
import { Button, Modal } from 'semantic-ui-react'
import AddStockListForm from './AddStockListForm'
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
        this.props.fetchStocks(ticker.symbol, ticker.name)
        this.props.fetchNews(ticker.symbol)}}>
        <div className="description">{ticker.name}</div>
        <div div  className="description">{ticker.symbol}</div>
      <Modal primary 
        trigger={<Button red>View More</Button>}
        header={ticker.name}
        >
        <StockChart name={ticker.name} symbol={ticker.symbol}/>
        <Modal.Actions>
          <Modal
          size="small"
          trigger={<Button primary> Add Stock </Button>} >
            <Modal.Content>
            <AddStockListForm/>

            </Modal.Content>
          </Modal>
        </Modal.Actions>
        <Modal.Content image scrolling>
          <News name={ticker.name} symbol={ticker.symbol} />
        </Modal.Content>
      </ Modal>
    </div>
  )


  return (
    <div>
    <h1>Tickers</h1>
      {this.props.loading ? 
      <div>
        <div className="ui segment centered">
        <div className="ui active inverted dimmer">
        <div className="ui text loader">Fetching Stocks!</div>
        <p/>
        </div>
        </div>
        </div>
        : 
        null}
        <div className = "ui grid">
        <div className="ui cards">
        {tickerItems}
        </div>
        </div>
    </div>
    )
  
}
}


const mapStateToProps = (state) => {
        return {
          tickers: state.tickers.tickers,
          loading: state.tickers.loading
        }
}

export default connect( mapStateToProps, {fetchStocks, addStockToList, fetchTickers, fetchNews })(Ticker)