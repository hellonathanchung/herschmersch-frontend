class PostStockDropDown extends React.Component {
  state= {}


  render () {

    const mapStocks = this.props.stockList.map(stock => 
      ({ key:stock.stockInformation.symbol, value: stock.id, text: stock.stockInformation.name }))
    return ()
  }
}

const mapStateToProps = (state) => {
  return {user_id: state.user.user_id,
    stockList: state.stockList.stockList }
}
export default connect(mapStateToProps, {createPost, updatePost})(withRouter(PostStockDropDown))