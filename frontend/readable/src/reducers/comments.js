import {
  RECEIVE_COMMENTS,
  ADD_COMMENT,
  DELETE_COMMENT,
  SAVE_COMMENT,
  VOTE_COMMENT
 }
 from '../actions/comments.js'
import produce from "immer"

export default function comments (state={}, action) {
  produce(state, draft => {
    switch (action.type) {
      case RECEIVE_COMMENTS:
        action.comments.forEach(comment => {
            draft.comments[comment.id] = comment
        })
        break;
      case ADD_COMMENT:
        draft.comments.push(action.comment)
        break;
      case SAVE_COMMENT:
        const comment = draft.comment.filter(c => c.id === action.comment.id)[0]
        if (comment) {
          comment.body = action.comment.body
        }
        break;
      case DELETE_COMMENT:
        draft.comments.splice(draft.findIndex(c => c.id === action.commentId), 1);
        break;
      case VOTE_COMMENT:
        const comment2 = draft.comments.filter(c => c.id === action.commentId)[0]
        if (comment2) {
          if (action.vote === 'upVote') {
            comment2.vote = comment2.vote + 1
          }
          else if(comment.vote >= 1) {
            comment2.vote = comment2.vote - 1
          }
        }
        break;
      default:
        break
      }
  });
  return state
}
