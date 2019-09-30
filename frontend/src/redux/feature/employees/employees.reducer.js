import { get } from 'lodash';
import * as AT from './../../actionTypes';

const { EMPLOYEES } = AT;

export const INIT_STATE = {
  employees: [],
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
      return { ...state, selectedEmployee: action.payload };

    case AT.SET_EMPLOYEES:
      return { ...state, employees: action.payload };

    case AT.SET_ERROR:
      return { ...state, isLoading: false, isError: action.payload };

    default:
      return state;
  }
};
