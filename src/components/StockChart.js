import React, { Component } from "react";
import ReactFrappeChart from "react-frappe-charts";
import {fetchStocks} from '../actions/stockActions'
import moment from 'moment'
import { connect } from 'react-redux'


class StockChart extends Component {

  componentDidMount() {
    let newSymbol = this.props.symbol
    this.props.fetchStocks(newSymbol)
  }
  render () {
    let xValues=this.props.stockXValues
    let readableXValues = xValues.map(date => (moment(date).format("MMM Do YY")))
    let yValues=this.props.stockYValues
    let company = this.props.stockSymbol

    return (
      <div>
      {company}
      <ReactFrappeChart
      type="line"
      colors={["#21ba45"]}
      axisOptions={{ xAxisMode: "tick", yAxisMode: "tick", xIsSeries: 1 }}
      height={250}
      data={{
        labels: readableXValues,
        datasets: [{ values: yValues }],
      }}
      />
      </div>
      );
    }
  }

const mapStateToProps = (state) => {
  return {
    stockXValues: state.stocks.stockXValues.reverse(),
    stockYValues: state.stocks.stockYValues.reverse(),
    stockSymbol: state.stocks.stockSymbol
  }
  }

export default connect( mapStateToProps, { fetchStocks })(StockChart)