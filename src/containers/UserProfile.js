import React, { Component } from 'react';
import PostForm from  "../components/PostForm"
import { connect } from 'react-redux'
import { fetchPosts, deletePost } from '../actions/postActions'
import { Button, Modal } from 'semantic-ui-react'

class UserProfile extends Component {

  
  render() {
    console.log(this.props.stockList)
    const stockCount = this.props.stockList.stockList.length

  return (

      <div >
          <h1 > User Page </h1>
       UserPosts
       How many stocks you own
       How much the stocks are valued at
       How much you paid for the stocks
       Posts you made

       <p>Total Stocks you own: {stockCount}</p>
      </div>
          )
      }
  }

  const mapStateToProps = (state) => {
    return {user: state.user,
            stockList: state.stockList}
  }
  
export default connect(mapStateToProps) (UserProfile)