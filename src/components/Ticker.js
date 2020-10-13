import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchTickers } from '../actions/tickerActions'

class Ticker extends Component {


  componentDidMount() {
    this.props.fetchTickers()
    }
    
render () {

  const tickerItems = this.props.tickers
  return (
    <div>
      
    <h1>Ticker</h1>
    </div>
    )
  
}
}

const mapStateToProps = (state) => {
        return {tickers: state.tickers.tickers}
}
export default connect( mapStateToProps, { fetchTickers })(Ticker)