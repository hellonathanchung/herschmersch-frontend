import React, { Component } from "react";
import Plot from 'react-plotly.js';
class Stock extends Component {
    // APIKEY = {process.env.REACT_APP_ALPHAVANTAGE_API_KEY}

    state = {
        stockName: "",
        stockChartXValues: [],
        stockChartYValues: []
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
            .then(
                function(response) {
                    return response.json();
                }
            )
            .then(
                function(data) {
                    console.log(data);

                    for (var key in data['Time Series (Daily)']) {
                        stockChartXValuesFunction.push(key);
                        stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
                    }

                    // console.log(stockChartXValuesFunction);
                    pointerToThis.setState({
                        stockChartXValues: stockChartXValuesFunction,
                        stockChartYValues: stockChartYValuesFunction
                    });
                }
            )
    }
render() {


return (
    <div >
        <h1 > Stock Market </h1>
        <Plot
        data={[
            {
              x: this.state.stockChartXValues,
              y: this.state.stockChartYValues,
              type: 'scatter',
              mode: 'lines+markers',
              marker: {color: 'red'},
            }
          ]}
          layout={{width: 720, height: 440, title: 'A Fancy Plot'}}
        />
      </div>
        )
    }
}
export default Stock