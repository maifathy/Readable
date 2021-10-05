import { combineReducers } from 'redux'
import authedUser from './authedUser.js'
import categories from './categories.js'
import posts from './posts.js'
import comments from './comments.js'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
  posts,
  comments,
  categories,
  authedUser,
  loadingBar: loadingBarReducer
})
