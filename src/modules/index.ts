import { combineReducers } from 'redux';
import todos from './todos';
import github from './github';

const rootReducer = combineReducers({
  todos,
  github,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
