import { INCREMENT, DECREMENT } from './types';

export const increment = () => ({
  type: INCREMENT
})

export const decrement = () => ({
  type: DECREMENT
})

export const initialState = {
  number: 0
}
