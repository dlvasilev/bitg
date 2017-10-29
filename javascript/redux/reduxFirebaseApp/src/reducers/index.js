import { combineReducers } from 'redux';

import PostsReducer from './posts';

const rootReducer = combineReducers({
  state: PostsReducer
});

export default rootReducer;
