import React, { Component } from "react";
import { createChart } from 'lightweight-charts';
class Stock extends Component {

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
        let API_KEY = process.env.REACT_APP_ALPHAVANTAGE_API_KEY
        const pointerToThis = this;

        let stockTicker = 'MSFT'
        let stockChartXValuesFunction = []
        let stockChartYValuesFunction = []

        fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stockTicker}&outputsize=compact&apikey=${API_KEY}`)
            .then(response => response.json())
            .then( stockData => this.setState({stockdata:stockData['Time Series (Daily)']}))
        fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stockTicker}&outputsize=compact&apikey=${API_KEY}`)
            .then((response) => response.json())
            .then( function(data) {console.log(data);
                for (var key in data['Time Series (Daily)']) {
                    stockChartXValuesFunction.push(key);
                    stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
                }
                console.log(stockChartXValuesFunction);
                pointerToThis.setState({
                    stockChartXValues: stockChartXValuesFunction,
                    stockChartYValues: stockChartYValuesFunction
                });
                }
            )
        
    }

    

render() {


return (
    <div className = "card">
        <h1 > Stock Market Hey </h1>
    </div>
        )
    }
}
export default Stock