import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import auth from './feature/auth/auth.reducer';
import employees from './feature/employees/employees.reducer';
import topics from './feature/topics/topics.reducer';
import loaders from './feature/loaders/loaders.reducer';
import ui from './feature/ui/ui.reducer';

const reducers = history =>
  combineReducers({
    router: connectRouter(history),
    auth,
    employees,
    topics,
    loaders,
    ui
  });

export default reducers;
