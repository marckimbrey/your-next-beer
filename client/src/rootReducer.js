import { combineReducers } from 'redux'

import polls from './reducers/polls';
import  beers from './reducers/beers';
import user  from './reducers/users';

const rootReducer = combineReducers({
  polls,
  user,
  beers
});

export default rootReducer;
