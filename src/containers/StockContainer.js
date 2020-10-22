import React, { Component } from "react";
import Ticker from '../components/Ticker'
import { connect } from 'react-redux'
// import {fetchStocks} from '../actions/stockActions'
import AddStockListForm from '../components/AddStockListForm'
import { Segment } from 'semantic-ui-react'

import Portfolio from '../containers/Portfolio'


class StockContainer extends Component {



render() {

return (
    <div >
        <Ticker/>
        <br/>
        <br/>
        <Segment/>
        <br/>
        <br/>
        <Portfolio/>
    </div>
        )
    }
}

export default StockContainer