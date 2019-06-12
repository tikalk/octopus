import React from 'react';
import { connect } from 'react-redux';
import ListSubheader from '@material-ui/core/ListSubheader';
import EmployeeListItem from './EmployeeListItem';
import { topicSelected } from '../../redux/feature/topics/topics.actions';
import { employeeSelected } from '../../redux/feature/employees/employees.actions';

const EmployeesListSection = (props) => {

  const { title, employees, search, topics, selectedEmployee, selectedTopic } = props;

  const onSelectedTopic = (topic, employee) => {
    props.topicSelected({ topic, employee });
  };

  const onExpand = (employee) => {
    props.employeeSelected(employee);
  };

  const renderEmployees = ({ employees, search, selectedEmployee, topics, selectedTopic }) => (
    employees
      .filter(user => search == '' || user.name.includes(search))
      .map(employee => (
        <EmployeeListItem
          employee={employee}
          key={employee.name}
          isSelected={employee.name === selectedEmployee.name}
          topics={topics}
          onSelectedTopic={onSelectedTopic}
          selectedTopic={selectedTopic}
          onExpand={onExpand}
        />
      ))
  );

  return <div>
    <ListSubheader>{title}</ListSubheader>
    {renderEmployees({ employees, search, selectedEmployee, topics, selectedTopic })}
  </div>;


}

const mapStateToProps = ({ employees: employeesStore, topics: topicsStore }) => {
  const { employees, selectedEmployee } = employeesStore;
  const { topics, selectedTopic } = topicsStore;
  return { employees, topics, selectedEmployee, selectedTopic };
};

export default connect(mapStateToProps, {
  topicSelected,
  employeeSelected,
})(EmployeesListSection);
