  import { combineReducers } from 'redux'
  import postReducer from './postReducer'
  import loginReducer from './loginReducer'

  export default combineReducers({
    posts: postReducer,
    user: loginReducer
  })