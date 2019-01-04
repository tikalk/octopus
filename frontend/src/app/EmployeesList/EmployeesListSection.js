import React from 'react';
import { connect } from 'react-redux';
import { eq } from 'lodash';
import ListSubheader from '@material-ui/core/ListSubheader';
import EmployeeListItem from './EmployeeListItem';
import { topicSelected } from '../../redux/feature/topics/topics.actions';
import { employeeSelected } from '../../redux/feature/employees/employees.actions';

class EmployeesListSection extends React.Component {
  onSelectedTopic = (topic, employee) => {
    this.props.topicSelected({ topic, employee });
  };

  onExpand = (employee) => {
    this.props.employeeSelected(employee);
  };

  renderEmployees = ({ employees, search, selectedEmployee, topics, selectedTopic }) => (
    employees
      .filter(user => search == '' || user.name.includes(search))
      .map(employee => (
        <EmployeeListItem
          employee={employee}
          key={employee.name}
          isSelected={employee.name === selectedEmployee.name}
          topics={topics}
          onSelectedTopic={this.onSelectedTopic}
          selectedTopic={selectedTopic}
          onExpand={this.onExpand}
        />
      ))
  );

  render() {
    const { title, employees, search, topics, selectedEmployee, selectedTopic } = this.props;

    return <div>
      <ListSubheader>{title}</ListSubheader>
      {this.renderEmployees({ employees, search, selectedEmployee, topics, selectedTopic })}
    </div>;
  }

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
