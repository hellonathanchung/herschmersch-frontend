import React from "react";
import { connect } from "react-redux";
import { addStockToList } from "../actions/stockListActions";
import { withRouter } from "react-router-dom";
import { Button } from "semantic-ui-react";

class AddStockListForm extends React.Component {
  state = {
    initialCost: 0,
    shares: 0,
  };

  componentDidMount() {
    this.setState({ initialCost: this.props.currentPrice });
  }

  handleFormChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleListStockSubmit = (event) => {
    event.preventDefault();

    const newStockListData = {
      name: this.props.stockName,
      symbol: this.props.stockSymbol,
      initialCost: this.state.initialCost,
      shares: this.state.shares,
    };
    this.props.addStockToList(event, newStockListData, this.props.stockName, this.props.stockSymbol);
    this.props.history.push("/stocks");
  };
  render() {
    return (
      <div>
        <h2>Add a Stock</h2>
        <h2> {`Current Price: $ ${this.props.currentPrice.toFixed(2)}`}</h2>
        <div div className="ui one column stackable center aligned page grid">
          <form className="column twelve wide" onChange={(e) => this.handleFormChange(e)} onSubmit={(e) => this.handleListStockSubmit(e)}>
            <div className="ui form">
              <div className="field">
                <h1>
                  <label>{this.props.stockName}</label>
                </h1>
                <label> Stock Price</label>
                <input type="number" step="0.01" value={this.state.initialCost} placeholder={`$${this.props.currentPrice.toFixed(2)}`} name="initialCost" />
                <label> Shares </label>
                <input type="number" placeholder={this.state.content} name="shares" />
                <br />
                <Button approve className="ui-button">
                  Submit
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    stockName: state.stocks.stockName,
    stockSymbol: state.stocks.stockSymbol,
    currentPrice: state.stocks.currentPrice,
  };
};
export default connect(mapStateToProps, { addStockToList })(withRouter(AddStockListForm));
