import React, { Component } from 'react';
import { connect } from 'react-redux'
import { removeStockFromList } from '../actions/stockListActions'
import { Button, Modal } from 'semantic-ui-react'
import StockChart from '../components/StockChart'
import News from '../components/News'
import { Segment } from 'semantic-ui-react'



class Portfolio extends Component {

  render() {
    const portfolioStocks = this.props.stockList.map(userStock =>
      <div className="ui raised link card" key={userStock.id}>
        <h2 className="description">{userStock.stockInformation.name}</h2>
        <h4 className="description">{userStock.stockInformation.symbol}</h4>
        <h4 className="description">Initial Cost: ${userStock.initial_cost}</h4>
        <h4 className="description">Shares: {userStock.shares}</h4>
        <Button
          className= "ve basic button"
          onClick={(event)=>this.props.removeStockFromList(event,userStock.id)}>Remove Stock </Button>
        <Modal
          trigger={<Button primary>View More </Button>
          }
          header={userStock.stockInformation.name}
          
          >
          <Modal.Content>
          {<StockChart name={userStock.stockInformation.name} symbol={userStock.stockInformation.symbol}/>}          
          <h4 className="description">Shares: {userStock.shares}</h4>
          <h4 className="description">Initial Cost: ${userStock.initial_cost}</h4>
          <h4  style={{color: ((this.props.currentPrice - userStock.initial_cost) * userStock.shares).toFixed(2) > 0 ? "green" : "red"}} className="description">Total Gain/Loss: {((this.props.currentPrice - userStock.initial_cost) * userStock.shares).toFixed(2)}</h4>
          </Modal.Content>
          <Modal.Content image scrolling>

          <News name={userStock.stockInformation.name} symbol={userStock.stockInformation.symbol} />
        </Modal.Content>
          </Modal>
        </div>)

  return (
    <div >
      <h1>Portfolio</h1>
      <br/>
      <div className="ui three column doubling stackable grid container">
      <div className="ui centered cards">
      {this.props.loading?<div className="ui segment centered">
        <div className="ui active inverted dimmer">
        <div className="ui text loader">Fetching Stocks!</div>
        <p/>
        </div>
        </div> : [portfolioStocks]}
      </div>
      </div>
    </div>
  )
  }
}
const mapStateToProps = (state) => {
  return {stockList: state.stockList.stockList,
  currentPrice: state.stocks.currentPrice}
}
export default connect(mapStateToProps, {removeStockFromList}) (Portfolio)