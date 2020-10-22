import React, { Component } from "react";
import ReactFrappeChart from "react-frappe-charts";
import {fetchStocks} from '../actions/stockActions'
import moment from 'moment'
import { connect } from 'react-redux'
import { Loader } from 'semantic-ui-react'


class StockChart extends Component {

  componentDidMount() {
    let newSymbol = this.props.symbol
    let companyName = this.props.name
    this.props.fetchStocks(newSymbol, companyName)
  }
  render () {
    let xValues=this.props.stockXValues
    let readableXValues = xValues.map(date => (moment(date).format("MMM Do YY")))
    let yValues=this.props.stockYValues
    let company = this.props.stockSymbol
    let companyName = this.props.stockName
    let currentPrice= this.props.currentPrice

    return (

      this.props.loading ?<Loader active inline='centered' /> :
      <div>
      <h1>{companyName}</h1>
      <h1>{company}</h1>
      <ReactFrappeChart
      type="line"
      colors={["#21ba45"]}
      axisOptions={{ xAxisMode: "tick", yAxisMode: "tick", xIsSeries: 1 }}
      height={250}
      data={{
        labels: readableXValues,
        datasets: [{ values: yValues }],
      }}s
      />
      <h2>{`Current Price: $${currentPrice}`}</h2>
      </div>
      );
    }
  }

const mapStateToProps = (state) => {
  return {
    stockXValues: state.stocks.stockXValues.reverse(),
    stockYValues: state.stocks.stockYValues.reverse(),
    stockName: state.stocks.stockName,
    stockSymbol: state.stocks.stockSymbol,
    currentPrice: state.stocks.currentPrice,
    loading: state.stocks.loading
  }
  }

export default connect( mapStateToProps, { fetchStocks })(StockChart)