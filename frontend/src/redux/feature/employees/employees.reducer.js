import { get } from 'lodash';
import * as AT from './../../actionTypes';

const { EMPLOYEES } = AT;

export const INIT_STATE = {
  employees: [],
  me: {},
  selectedEmployee: {},
  isError: false
};

export default (state = INIT_STATE, action) => {
  const { type, payload, meta } = action;
  const feature = get(meta, 'feature');

  if (feature !== EMPLOYEES) {
    return state;
  }
  switch (type) {
    case AT.SET_SELECTED_EMPLOYEE:
      return { ...state, selectedEmployee: payload };

    case AT.SET_EMPLOYEES:
      return { ...state, employees: payload };

    case AT.SET_ERROR:
      return { ...state, isLoading: false, isError: payload };

    case AT.SET_ME:
      return { ...state, me: payload };
    default:
      return state;
  }
};
