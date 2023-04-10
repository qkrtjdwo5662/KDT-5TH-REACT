import { combineReducers } from 'redux';
import todo from './modules/todo';
import weight from './modules/weight';
import mbti from './modules/mbti';
import user from './modules/user';

export default combineReducers({
  //reducer 합치기
  todo,
  weight,
  mbti,
  user,
});
