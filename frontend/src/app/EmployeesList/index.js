import React, { useState } from 'react';
import { groupBy } from 'lodash';
import EmployeesListSection from './EmployeesListSection';
import { CircularProgress, TextField, List, Divider, IconButton } from '@material-ui/core';
import { Refresh as RefreshIcon } from '@material-ui/icons';

const EmployeesList = props => {
  const [search, setSearch] = useState('');
  const {
    onEmployListRefreshClick,
    onEmployeeSelected,
    onTopicSelected,
    employees,
    topics,
    selectedEmployee,
    selectedTopic,
    isLoader
  } = props;

  const handleSearchChange = event => {
    setSearch(event.target.value);
  };

  const renderEmployeesDetails = () => {
    const groups = groupBy(employees, 'group');
    return Object.keys(groups).map(groupName => (
      <EmployeesListSection
        key={groupName}
        title={groupName}
        search={search}
        employees={employees}
        selectedEmployee={selectedEmployee}
        topics={topics}
        selectedTopic={selectedTopic}
        onEmployeeSelected={onEmployeeSelected}
        onTopicSelected={onTopicSelected}
      />
    ));
  };

  return (
    <div>
      {!isLoader && (
        <List component="nav">
          <TextField
            id="name"
            placeholder="חיפוש"
            value={search}
            onChange={handleSearchChange}
            style={{ margin: '0 30px 10px', paddingBottom: '16px' }}
          />
          <IconButton aria-label="Refresh List" onClick={onEmployListRefreshClick}>
            <RefreshIcon />
          </IconButton>
          <Divider />
          {renderEmployeesDetails()}
        </List>
      )}
      {isLoader && <CircularProgress size={30} thickness={5} />}
    </div>
  );
};

export default EmployeesList;
