import React, { Component } from "react";
import Ticker from '../components/Ticker'
import { connect } from 'react-redux'
// import {fetchStocks} from '../actions/stockActions'
import AddStockListForm from '../components/AddStockListForm'
import Portfolio from '../containers/Portfolio'


class StockContainer extends Component {



render() {

return (
    <div >
        <AddStockListForm/>

        <h1 > <Ticker/></h1>
        <p></p>
        <p></p>
        <Portfolio/>
    </div>
        )
    }
}

export default StockContainer