import * as AT from './../../actionTypes';

const { EMPLOYEES } = AT;

export const getEmployees = ({ force = false }) => {
  return {
    type: AT.GET_EMPLOYEES.API_REQUEST,
    payload: {},
    meta: {
      feature: EMPLOYEES,
      sourceAction: AT.GET_EMPLOYEES,
      url: 'api/employees',
      method: 'GET',
      force
    }
  };
};

export const employeeSelected = employee => {
  return {
    type: AT.EMPLOYEE_SELECTED,
    payload: employee,
    meta: {
      feature: EMPLOYEES
    }
  };
};

export const setSelectedEmployee = employee => {
  return {
    type: AT.SET_SELECTED_EMPLOYEE,
    payload: employee,
    meta: {
      feature: EMPLOYEES
    }
  };
};

export const setEmployees = employees => {
  return {
    type: AT.SET_EMPLOYEES,
    payload: employees,
    meta: {
      feature: EMPLOYEES
    }
  };
};

export const setError = state => {
  return {
    type: AT.SET_ERROR,
    payload: state,
    meta: {
      feature: EMPLOYEES
    }
  };
};

export const setMe = me => {
  return {
    type: AT.SET_ME,
    payload: me,
    meta: {
      feature: EMPLOYEES
    }
  };
};

export const userChangedFilter = ({ name }) => {
  return {
    type: AT.USER_CHANGED_FILTER,
    payload: name,
    meta: {
      feature: EMPLOYEES
    }
  };
};

export const setFilter = filter => {
  return {
    type: AT.SET_FILTER,
    payload: filter,
    meta: {
      feature: EMPLOYEES
    }
  };
};
