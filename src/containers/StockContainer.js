import React, { Component } from "react";
import StockChart from '../components/StockChart'
import Ticker from '../components/Ticker'
import moment from 'moment'


class StockContainer extends Component {

    state = {
        stockName: "",
        stockChartXValues: [],
        stockChartYValues: [],
        stockData: {}
    }

    componentDidMount() {
        this.fetchStock()
    }

    fetchStock() {
        let API_KEY = process.env.REACT_APP_MARKETSTACK_API_KEY
        console.log(API_KEY)
        const pointerToThis = this;
        let stockTicker = 'MSFT'
        let URL = `http://api.marketstack.com/v1/eod?access_key=${API_KEY}&symbols=${stockTicker}`
        let stockChartXValuesFunction = []
        let stockChartYValuesFunction = []

        fetch(URL)
        .then(res => res.json())
        .then( function(stockData) {console.log(stockData);
            stockData.data.map( stockDate => {
                stockChartXValuesFunction.push(stockDate.date)
                stockChartYValuesFunction.push(stockDate.high)}
            )}
        )
        this.setState({stockChartXValues:stockChartXValuesFunction,
        stockChartYValues:stockChartYValuesFunction})
        }

render() {
    let xValues = this.state.stockChartXValues

    let readableXValues = xValues.map(date => (moment(date).format("MMM Do YY")))
return (
    <div >
        <StockChart
        xValues={this.state.stockChartXValues}
        readableXValues={readableXValues}
        yValues={this.state.stockChartYValues}/>
        <div className="card">
        <h1 > <Ticker/></h1>
        </div>
    </div>
        )
    }
}
export default StockContainer