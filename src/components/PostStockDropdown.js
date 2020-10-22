class PostStockDropDown extends React.Component {
  state= {}


  render () {
    const mapStocks = this.props.stockList.map(stock => 
      ({ key:stock.stockInformation.symbol, value: stock.id, text: stock.stockInformation.name }))
    return ()
  }
}

const mapStateToProps = (state) => {
  return {
    stockList: state.stockList.stockList }
}
export default connect(mapStateToProps)(withRouter(PostStockDropDown))