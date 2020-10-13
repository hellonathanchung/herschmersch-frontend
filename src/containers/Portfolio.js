import React from 'react';
import StockChart from '../components/StockChart'
import { connect } from 'react-redux'


class Portfolio  extends React.Component {

  render() {

    console.log(this.props)
  return (
    <div >
      <h1>Portfolio</h1>
      
      <StockChart />

    </div>
  )
  }
}

const mapStateToProps = (state) => {
  return {user: state.user.userStocks.stockInformation}
}
export default connect(mapStateToProps) (Portfolio)