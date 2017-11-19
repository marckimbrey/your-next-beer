import { combineReducers } from 'redux'

import polls from './reducers/polls';
import beers from './reducers/beers'

const rootReducer = combineReducers({
  polls,
  beers
});

export default rootReducer;
