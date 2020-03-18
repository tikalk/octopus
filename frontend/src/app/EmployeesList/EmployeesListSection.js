import React from 'react';
import ListSubheader from '@material-ui/core/ListSubheader';
import EmployeeListItem from './EmployeeListItem';

const EmployeesListSection = props => {
  const {
    title,
    employees,
    search,
    topics,
    selectedEmployee,
    selectedTopic,
    onTopicSelected,
    onEmployeeSelected,
    filter
  } = props;

  const handleSelectedTopic = (topic, employee) => {
    onTopicSelected(topic);
  };

  const handleExpand = employee => {
    onEmployeeSelected(employee);
  };

  const renderEmployees = ({ employees, search, selectedEmployee, topics, selectedTopic, filter }) =>
    employees
      .filter(({ name }) => search == '' || name.includes(search))
      .filter(({ leader }) => filter[leader])
      .map(employee => (
        <EmployeeListItem
          employee={employee}
          key={employee.name}
          isSelected={employee.name === selectedEmployee.name}
          topics={topics}
          onSelectedTopic={handleSelectedTopic}
          selectedTopic={selectedTopic}
          onExpand={handleExpand}
        />
      ));

  return (
    <div>
      <ListSubheader>{title}</ListSubheader>
      {renderEmployees({
        employees,
        search,
        selectedEmployee,
        topics,
        selectedTopic,
        filter
      })}
    </div>
  );
};

export default EmployeesListSection;
