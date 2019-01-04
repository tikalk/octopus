import * as AT from './../../actionTypes';
import { eq } from 'lodash';
import { setEmployees, setError, setSelectedEmployee } from './employees.actions';
import { setTopicData, topicSelected } from '../topics/topics.actions';
import { setLoader } from '../loaders/loaders.actions';

const { EMPLOYEES } = AT;
export const employeesMiddleware = ({ dispatch, getState }) => (next) => (action) => {
  next(action);

  switch (true) {

    case action.type.includes(`${EMPLOYEES} ${AT.EMPLOYEE_SELECTED}`): {
      const { selectedEmployee } = getState().employees;
      const { topics } = getState().topics;
      let arr = [];
      if (eq(selectedEmployee, action.payload)) {
        arr = [setSelectedEmployee({}), setTopicData('')];
      } else {
        arr = [
          setSelectedEmployee(action.payload),
          topicSelected({ topic: topics[0], employee: action.payload })];
      }
      dispatch(arr);
    }
      break;

    case action.type.includes(`${EMPLOYEES} ${AT.GET_EMPLOYEES.SUCCESS}`): {
      const { data } = action.payload;
      dispatch([
        setEmployees(data),
        setLoader({ name: 'employees', state: false }),
      ]);
    }
      break;

    case action.type.includes(`${EMPLOYEES} ${AT.GET_EMPLOYEES.ERROR}`): {
      dispatch([
        setLoader({ name: 'employees', state: false }),
        setError(true),
      ]);
    }
      break;

  }
};