import React from 'react';
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'

class PostStockDropDown extends React.Component {
  state= {}


  render () {
    const mapStocks = this.props.stockList.map(stock => 
      ({ key:stock.stockInformation.id, value: stock, text: stock.stockInformation.name }))

      return (
        <div>

        <select class="ui fluid search dropdown" multiple="">
          {mapStocks}
       </select>
        </div>


      )
  }
}

const mapStateToProps = (state) => {
  return {
    stockList: state.stockList.stockList }
}
export default connect(mapStateToProps)(withRouter(PostStockDropDown))