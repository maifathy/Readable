import {
  getInitialData,
  newPost,
  editPost,
  newComment,
  editComment,
  deletePost,
  deleteComment,
  editPostVote,
  editCommentVote,
  getPostsPerCategory
} from '../utils/api.js'
import { receiveAuthUser } from '../actions/authedUser.js'
import { receiveCategories } from '../actions/categories.js'
import { receivePosts, addPost, removePost, savePost, votePost, getPostsByCatId } from '../actions/posts.js'
import { receiveComments, addComment, removeComment, saveComment, voteComment } from '../actions/comments.js'
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTHED_ID = 'maifathy'

export default function handleInitialData(){
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
    .then(({ categories, posts }) => {
      console.log('handleInitialData: cat, post =>', categories);
      dispatch(receiveCategories(categories))
      dispatch(receivePosts(posts))
      dispatch(receiveAuthUser(AUTHED_ID))
      dispatch(hideLoading())
    })
  }
}

export function handleAddPost(title, body, catId){
  return (dispatch, getState) => {
    const { authedUser } = getState()
    dispatch(showLoading())
    newPost(title, body, authedUser, catId)
    .then((post) => {
      dispatch(addPost(post))
    })
    .then(() => dispatch(hideLoading()))
  }
}

export function handleEditPost(postId, title, body){
  return (dispatch, getState) => {
    dispatch(showLoading())
    editPost(postId, title, body)
    .then((post) => {
      dispatch(savePost(post))
    })
    .then(() => dispatch(hideLoading()))
  }
}

export function handleDeletePost(postId){
  return (dispatch, getState) => {
    dispatch(showLoading())
    deletePost(postId)
    .then((postId) => {
      dispatch(removePost(postId))
    })
    .then(() => dispatch(hideLoading()))
  }
}

export function handleVotePost(postId, vote){
  return (dispatch, getState) => {
    dispatch(showLoading())
    editPostVote(postId, vote)
    .then((vote) => {
      dispatch(votePost(postId, vote))
    })
    .then(() => dispatch(hideLoading()))
  }
}

export function handleAddComment(body, postId){
  return (dispatch, getState) => {
    const { authedUser } = getState()
    dispatch(showLoading())
    newComment(body, authedUser, postId)
    .then((comment) => {
      dispatch(addComment(comment))
    })
    .then(() => dispatch(hideLoading()))
  }
}

export function handleEditComment(commentId, body){
  return (dispatch, getState) => {
    dispatch(showLoading())
    editComment(commentId, body)
    .then((comment) => {
      dispatch(saveComment(comment))
    })
    .then(() => dispatch(hideLoading()))
  }
}

export function handleDeleteComment(commentId){
  return (dispatch, getState) => {
    dispatch(showLoading())
    deleteComment(commentId)
    .then((postId) => {
      dispatch(removeComment(postId))
    })
    .then(() => dispatch(hideLoading()))
  }
}

export function handleVoteComment(commentId, vote){
  return (dispatch, getState) => {
    dispatch(showLoading())
    editCommentVote(commentId, vote)
    .then((vote) => {
      dispatch(voteComment(commentId, vote))
    })
    .then(() => dispatch(hideLoading()))
  }
}

export function handleGetPostsPerCategory(catId){
  return (dispatch, getState) => {
    dispatch(showLoading())
    getPostsPerCategory(catId)
    .then((vote) => {
      dispatch(getPostsByCatId(catId))
    })
    .then(() => dispatch(hideLoading()))
  }
}
