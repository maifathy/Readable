export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const ADD_POST = 'ADD_POST'
export const DELETE_POST = 'DELETE_POST'
export const SAVE_POST = 'SAVE_POST'
export const VOTE_POST = 'VOTE_POST'
export const GET_POST_BY_CATID = 'GET_POST_BY_CATID'

export function receivePosts(posts){
  return {
    type: RECEIVE_POSTS,
    posts
  }
}

export function addPost(post){
  return {
    type: ADD_POST,
    post
  }
}

export function removePost(postId){
  return {
    type: DELETE_POST,
    postId
  }
}

export function savePost(post){
  return{
    type: SAVE_POST,
    post
  }
}

export function votePost(postId, vote){
  return{
    type: VOTE_POST,
    postId: postId,
    option: vote
  }
}

export function getPostsByCatId(catId){
  return{
    type: GET_POST_BY_CATID,
    catId
  }
}
