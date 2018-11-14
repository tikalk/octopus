import { replace } from 'react-router-redux';
import store from 'store';
import * as AT from './../../actionTypes';

const { AUTH } = AT;
export const authMiddleware = ({ dispatch, getState }) => (next) => (action) => {
  next(action);

  switch (true) {
    case action.type.includes(`${AUTH} ${AT.LOGOUT_USER}`): {
      store.remove('token');
      dispatch([replace('/')]);
    }
      break;

  }
};