import { combineReducers } from 'redux';
import counter from './counter';

const rootReducer = combineReducers({
  counter,      // redux state에 저장되는 이름
});

export default rootReducer;
