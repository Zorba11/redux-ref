import counterReducer from './counter';
import isLoggedReducer from './isLogged';
import { combineReducers } from 'redux';

// combinining all the reducers

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: isLoggedReducer,
});

export default allReducers;
