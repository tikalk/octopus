import { replace } from 'connected-react-router';
import store from 'store';
import * as AT from './../../actionTypes';
import createMiddleware from './../../middleware.helper';

const { AUTH } = AT;

const authMiddleware = async ({ action, dispatch, getState }) => {
  const { type, payload } = action;

  switch (type) {
    case AT.LOGOUT_USER:
      {
        store.remove('token');
        dispatch([replace('/')]);
      }
      break;
  }
};

export default createMiddleware({
  feature: AUTH
})(authMiddleware);
