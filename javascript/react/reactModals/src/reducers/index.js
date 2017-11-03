import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  colors: () => ['red', 'green', 'blue']
});

export default rootReducer;
