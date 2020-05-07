import * as AT from './../../actionTypes';
import { eq } from 'lodash';
import { setEmployees, setError, setSelectedEmployee, setMe, setFilter } from './employees.actions';
import { setTopicData, topicSelected } from '../topics/topics.actions';
import { setLoader } from '../loaders/loaders.actions';
import createMiddleware from './../../middleware.helper';
import store from 'store';

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
        const {
          data: { employees, me }
        } = payload;
        const filter = store.get('filter') || {};
        const leadersObj = employees.reduce((acc, employee) => {
          const { leader } = employee;
          acc[leader] = true;
          return acc;
        }, {});

        //cleaning stored filters for old leaders
        Object.keys(filter).forEach(leader => {
          if (leadersObj[leader] === undefined) {
            delete filter[leader];
          }
        });

        //adding new leaders to filter
        Object.keys(leadersObj).forEach(leader => {
          if (filter[leader] === undefined) {
            filter[leader] = true;
          }
        });

        dispatch([
          setLoader({ name: 'employees', state: false }),
          setFilter(filter),
          setEmployees(employees),
          setMe(me)
        ]);
      }
      break;

    case AT.GET_EMPLOYEES.ERROR:
      {
        dispatch([setLoader({ name: 'employees', state: false }), setError(true)]);
      }
      break;

    case AT.USER_CHANGED_FILTER: {
      const filter = getState().employees.filter;
      const { name } = payload;
      console.log(filter);
      if (filter) {
        filter[name] = !filter[name];
        store.set('filter', filter);
        dispatch(setFilter(filter));
      }
    }
  }
};

export default createMiddleware({
  feature: EMPLOYEES
})(employeesMiddleware);
