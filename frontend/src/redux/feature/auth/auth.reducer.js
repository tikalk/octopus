import * as AT from './../../actionTypes';
import store from 'store';
import { get } from 'lodash';

const { AUTH } = AT;

export const INIT_STATE = {
  token: store.get('token')
};

export default (state = INIT_STATE, action) => {
  const { type, payload, meta } = action;
  const feature = get(meta, 'feature');

  if (feature !== AUTH) {
    return state;
  }

  switch (action.type) {
    case AT.LOGOUT_USER:
      return { ...INIT_STATE };

    default:
      return state;
  }
};
