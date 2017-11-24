import { combineReducers } from 'redux'

import polls from './reducers/polls';
import  * as beers from './reducers/beers';
import * as users from './reducers/users';

const rootReducer = combineReducers({
  polls,
  beers,
  users
});

export default rootReducer;
