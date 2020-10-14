import {LOGIN_USER} from '../actions/types'
const initialState = {
  //represents items coming in from action.
username: "",
userPosts: [],
userStocks: [],
user_id: 0

}

export default function(state = initialState, action) {
  switch(action.type) {
    case LOGIN_USER:
      console.log('login reducer')
      return {
        ...state,
        username: action.payload.username,
        userPosts : action.payload.userPosts,
        userStocks: action.payload.userStocks,
        user_id: action.payload.user_id
      }
    default: 
      return state;
  }
}
