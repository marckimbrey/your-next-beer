import { combineReducers } from 'redux'

import polls from './reducers/polls'

const rootReducer = combineReducers({polls});

export default rootReducer;
