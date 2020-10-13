import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchTickers } from '../actions/tickerActions'
import { addStockToList } from '../actions/stockListActions'
import { Button, Icon, Modal } from 'semantic-ui-react'
import StockChart from './StockChart'



class Ticker extends Component {


  componentDidMount() {
    this.props.fetchTickers()
    }

    
render () {

  const tickerItems = this.props.tickers.map(ticker => 
    <div className="ui-stackable four column grid">
      <div  className="column">{ticker.name}</div>
      <div  className="column">{ticker.symbol}</div>
      <Button onClick={(e)=> this.props.addStockToList(e, ticker.name, ticker.symbol)} className="ui-button"> Add Stock </Button>
      <Modal
      
      trigger={<Button primary>View More </Button>}
      header={ticker.name}
      content= {<StockChart/>}
     
      actions={['Add Stock', { key: 'done', content: 'Done', positive: true }]}
    />
    </div>
  )
  return (
    <div>
      
    <h1>Ticker</h1>
    {tickerItems}
    </div>
    )
  
}
}

const mapDispatchToProps = dispatch => {
  return {
    addStockToList: () => dispatch({ type: 'ADD_STOCK_TO_LIST' }),
  }
}
const mapStateToProps = (state) => {
        return {
          tickers: state.tickers.tickers
        }
}

export default connect( mapStateToProps, { addStockToList, fetchTickers })(Ticker)