import { RECEIVE_CATEGORIES } from '../actions/categories.js'
import produce from 'immer'

export default function categories (state={}, action) {
  produce(state, draft => {
    switch (action.type) {
      case RECEIVE_CATEGORIES:
        action.categories.forEach(categories => {
            draft.categories[categories.id] = categories
        })
        break;
      default:
        break;
      }
  });
  return state
}
