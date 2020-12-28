export const INCREMENT = 'counter/increment';
export const DECREMENT = 'counter/decrement';

export const increment = () => {
  type: INCREMENT,
  payload: 0
}

export const decrement = () => {
  type: DECREMENT,
  payload: 0
}

const initialState = {
  number: 0
}
