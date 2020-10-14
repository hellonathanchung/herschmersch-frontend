import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button, Modal } from 'semantic-ui-react'
import StockChart from '../components/StockChart'


class Portfolio extends Component {

  
  render() {

    // const portfolioStocks = this.props.userStocks.map(userStock =>
    //   <div className="ui raised link card" key={userStock.id}>
    //     <h2 className="description">{userStock.stockInformation.name}</h2>
    //     <h4 className="description">{userStock.stockInformation.symbol}</h4>
    //     <Button onClick={(e)=> this.props.addStockToList(e, userStock.stockInformation.name, userStock.stockInformation.symbol)} className="ui button"> Add Stock </Button>
    //     <Modal
    //     trigger={<Button primary>View More </Button>}
    //     header={userStock.stockInformation.name}
    //     content= {<StockChart symbol={userStock.stockInformation.symbol}/>}
      
    //     actions={['Add Stock', { key: 'done', content: 'Done', positive: true }]}
    // />
    //     </div>)

  return (
    <div >
      <h1>Portfolio</h1>
      {/* <StockChart /> */}
      <div className="ui cards">
      {/* {portfolioStocks} */}
      </div>
    </div>
  )
  }
}
const mapStateToProps = (state) => {
  return {userStocks: state.stockLists}
}
export default connect(mapStateToProps) (Portfolio)