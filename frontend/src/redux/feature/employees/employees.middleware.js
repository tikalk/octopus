import * as AT from './../../actionTypes';
import { eq } from 'lodash';
import { setEmployees, setError, setSelectedEmployee } from './employees.actions';
import { setTopicData, topicSelected } from '../topics/topics.actions';
import { setLoader } from '../loaders/loaders.actions';
import createMiddleware from './../../middleware.helper';

const { EMPLOYEES } = AT;

const employeesMiddleware = async ({ action, dispatch, getState }) => {
  const { type, payload } = action;
  switch (type) {
    case AT.EMPLOYEE_SELECTED:
      {
        const { selectedEmployee } = getState().employees;
        const { topics } = getState().topics;
        let arr = [];
        if (eq(selectedEmployee, payload)) {
          arr = [setSelectedEmployee({}), setTopicData('')];
        } else {
          arr = [setSelectedEmployee(payload), topicSelected({ topic: topics[0], employee: payload })];
        }
        dispatch(arr);
      }
      break;

    case AT.GET_EMPLOYEES.SUCCESS:
      {
        const { data } = payload;
        dispatch([setEmployees(data), setLoader({ name: 'employees', state: false })]);
      }
      break;

    case AT.GET_EMPLOYEES.ERROR:
      {
        dispatch([setLoader({ name: 'employees', state: false }), setError(true)]);
      }
      break;
  }
};

export default createMiddleware({
  feature: EMPLOYEES
})(employeesMiddleware);
