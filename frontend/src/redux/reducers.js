import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth from './feature/auth/auth.reducer';
import employees from './feature/employees/employees.reducer';
import topics from './feature/topics/topics.reducer';
import loaders from './feature/loaders/loaders.reducer';

const reducers = combineReducers({
  routing: routerReducer,
  auth,
  employees,
  topics,
  loaders,
});

export default reducers;
