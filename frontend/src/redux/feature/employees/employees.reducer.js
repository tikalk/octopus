import * as AT from './../../actionTypes';

const { EMPLOYEES } = AT;

export const INIT_STATE = {
  employees: [],
  selectedEmployee: {},
  isError: false,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case `${EMPLOYEES} ${AT.SET_SELECTED_EMPLOYEE}`:
      return { ...state, selectedEmployee: action.payload };

    case `${EMPLOYEES} ${AT.SET_EMPLOYEES}`:
      return { ...state, employees: action.payload };

    case `${EMPLOYEES} ${AT.SET_ERROR}`:
      return { ...state, isLoading: false, isError: action.payload };

    default:
      return state;
  }
}
