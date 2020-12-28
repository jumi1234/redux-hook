import { INCREMENT, DECREMENT } from '../actions/counter';

export default function(state=initialState, action) {
  switch(action.type) {
    case INCREMENT:
      return {...state, number: number + 1}
    case DECREMENT:
      return {...state, number: number - 1}
    default:
      return state;
  }
}
