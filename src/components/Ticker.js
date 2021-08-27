import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTickers } from "../actions/tickerActions";
import { fetchNews } from "../actions/newsActions";
import { fetchStocks } from "../actions/stockActions";
import { addStockToList } from "../actions/stockListActions";
import { Button, Modal, Loader } from "semantic-ui-react";
import AddStockListForm from "./AddStockListForm";
import StockChart from "./StockChart";
import News from "./News";

class Ticker extends Component {
  componentDidMount() {
    if (this.props.tickers.tickers !== []) {
      this.props.fetchTickers();
    }
  }

  render() {
    const tickerItems = this.props.tickers.map((ticker) => (
      <div
        className="ui raised link card "
        // onMouseEnter={(e)=> {
        //   // this.props.fetchStocks(ticker.symbol, ticker.name)
        //   this.props.fetchNews(ticker.symbol)}}
      >
        <h1 className="description">{ticker.name}</h1>
        <div className="description">{ticker.symbol}</div>
        <Modal primary trigger={<Button primary>View More</Button>} header={ticker.name}>
          <StockChart name={ticker.name} symbol={ticker.symbol} />
          <Modal.Actions>
            <Modal size="small" trigger={<Button primary> Add Stock </Button>}>
              <Modal.Content>
                <AddStockListForm />
              </Modal.Content>
            </Modal>
          </Modal.Actions>
          <Modal.Content image scrolling>
            <News name={ticker.name} symbol={ticker.symbol} />
          </Modal.Content>
        </Modal>
      </div>
    ));

    return (
      <div>
        <h1> Tickers</h1>
        <br />

        {this.props.loading ? <Loader active inline="centered" /> : null}
        <div className="ui three column doubling stackable grid container centered">
          <div className="ui centered cards">{tickerItems}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tickers: state.tickers.tickers,
    loading: state.tickers.loading,
  };
};

export default connect(mapStateToProps, { fetchStocks, addStockToList, fetchTickers, fetchNews })(Ticker);
