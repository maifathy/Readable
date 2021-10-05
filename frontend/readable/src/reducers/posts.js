import {
  RECEIVE_POSTS,
  ADD_POST,
  DELETE_POST,
  SAVE_POST,
  VOTE_POST,
  GET_POST_BY_CATID
 }
 from '../actions/posts.js'
import produce from 'immer'

export default function posts (state={}, action) {
  produce(state, draft => {
    switch (action.type) {
      case RECEIVE_POSTS:
        return action.posts.forEach(post => {
            draft.posts[post.id] = post
        })
        break;
      case ADD_POST:
        draft.posts.push(action.post)
        break;
      case SAVE_POST:
        const post = draft.posts.filter(p => p.id === action.post.id)[0]
        if (post) {
          post.title = action.post.title
          post.body = action.post.body
        }
        break;
      case DELETE_POST:
        draft.posts.splice(draft.findIndex(p => p.id === action.postId), 1);
        break;
      case VOTE_POST:
        const post2 = draft.posts.filter(p => p.id === action.postId)[0]
        if (post2) {
          if (action.vote === 'upVote') {
            post2.vote = post2.vote + 1
          }
          else if(post.vote >= 1) {
            post2.vote = post2.vote - 1
          }
        }
        break;
      case GET_POST_BY_CATID:
        draft.posts.filter(p => p.category === action.catId)
        break;
      default:
        return state;
      }
  });
  return state
}
