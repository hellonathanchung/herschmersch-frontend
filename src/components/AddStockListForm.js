import React from 'react';
import { connect } from 'react-redux'
import { addStockToList } from '../actions/stockListActions'
import {withRouter} from 'react-router-dom'
import { Button } from 'semantic-ui-react'

class AddStockListForm extends React.Component{

  
  state = {
    cost: "",
  };

  componentDidMount () {
  
    }

  handleFormChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleListStockSubmit = (event) => { 
    event.preventDefault();

    const newPostData = {
      name: this.props.name,
      initialCost:this.state.initialCost,
      user: this.props.user,
      user_id: this.props.user_id
    }
      // this.props.addStockToList(event, ticker.name, ticker.symbol);
      this.props.history.push('/posts')
}
  render () {

    return (
      <div>

        <h1>Hello</h1>
      <h2>Add a Stock</h2>
      <div className="ui one column stackable center aligned page grid">
      <form className="column twelve wide"
      onChange={(e) => this.handleFormChange(e)}
      onSubmit={(e) => this.handlePostSubmit(e)}
      >
        <div className="ui form">
          <div className="field">
          <label>Stock Name</label>
          <input name="stockName" type="text" placeholder={this.state.title} />
          <label>Content</label >
          <textarea  placeholder={this.state.content} name="content"/>
    <br/>
    <Button className="ui-button">Submit</Button>
    </div>
    </div>
    </form>
      </div>
</div>
    )
  }
}



export default connect( null, {addStockToList})(withRouter(AddStockListForm))