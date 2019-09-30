import * as AT from '../../actionTypes';
import { get } from 'lodash';
const { LOADERS } = AT;

const INIT_STATE = {
  employees: false,
  topic: false
};

const loadersReducer = (state = INIT_STATE, action) => {
  const { type, payload, meta } = action;
  const feature = get(meta, 'feature');

  if (feature !== LOADERS) {
    return state;
  }

  switch (type) {
    case AT.SET_LOADER:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};

export default loadersReducer;
