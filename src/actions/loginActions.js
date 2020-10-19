import {LOGIN_USER, LOGOUT_USER, INITIAL_STOCK_LIST} from './types'

const API_ROOT = `http://localhost:3000/api/v1/`;

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearers ${localStorage.token}`,
};

export const login = (userCredentials)=> dispatch=> {
  const userPosts = userCredentials.user.posts
  const userStocks = userCredentials.user.list_stocks
  const username = userCredentials.user.username
  const user_id = userCredentials.user.id
    dispatch (
    {
    type: INITIAL_STOCK_LIST,
    payload: userStocks})
  
    dispatch({
    type: LOGIN_USER,
    payload: {userPosts, userStocks, username, user_id}
  }) 

};

export const logout = ()=> dispatch=> {

    dispatch({
    type: LOGOUT_USER,
    payload: {}
  }) 

};

