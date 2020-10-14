import React from 'react';
import { connect } from 'react-redux'


class Portfolio  extends React.Component {

  render() {

    console.log(this.props.user)

    const userStocks = this.props.user
  return (
    <div >

      {/* need to create code where you add up the values in each array and then pass it into the stock chart */}
      <h1>Portfolio</h1>
      
      {/* <StockChart /> */}

    </div>
  )
  }
}

const mapStateToProps = (state) => {
  return {userStocks: state.user.userStocks}
}
export default connect(mapStateToProps) (Portfolio)