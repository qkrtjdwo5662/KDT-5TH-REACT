import { combineReducers } from 'redux';
import todo from './modules/todo';
import weightReducer from './modules/weight';

export default combineReducers({
  //reducer 합치기
  todo,
  weightReducer,
});
