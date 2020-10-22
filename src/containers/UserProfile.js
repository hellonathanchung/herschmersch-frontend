import React, { Component } from 'react';
import { connect } from 'react-redux'

class UserProfile extends Component {

  
  render() {
    console.log(this.props.stockList)
    const stockCount = this.props.stockList.stockList.length
    const userPostCount = this.props.user.userPosts.length


    const userInfo = this.props.user.username

      
  

  return (

      <div >
          <h1 > User Page </h1>
        Username: {userInfo}
       UserPosts: 
       Posts you made: {userPostCount}

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