import { INCREMENT, DECREMENT } from '../actions/types';
import { initialState } from '../actions/counter';

export default function(state=initialState, action) {
  switch(action.type) {
    case INCREMENT:
      return {...state, number: state.number + 1}
    case DECREMENT:
      return {...state, number: state.number - 1}
    default:
      return state;
  }
}
