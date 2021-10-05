export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const SAVE_COMMENT = 'SAVE_COMMENT'
export const VOTE_COMMENT = 'VOTE_COMMENT'

export function receiveComments(comments){
  return {
    type: RECEIVE_COMMENTS,
    comments
  }
}

export function addComment(comment){
  return {
    type: ADD_COMMENT,
    comment
  }
}

export function removeComment(commentId){
  return {
    type: DELETE_COMMENT,
    commentId
  }
}

export function saveComment(comment){
  return{
    type: SAVE_COMMENT,
    comment
  }
}

export function voteComment(commentId, vote){
  return{
    type: VOTE_COMMENT,
    commentId: commentId,
    option: vote
  }
}
