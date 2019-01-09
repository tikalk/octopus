import React, { Component } from 'react';
import { groupBy } from 'lodash';
import EmployeesListSection from './EmployeesListSection';
import { CircularProgress, TextField, List, Divider, IconButton } from '@material-ui/core';
import { Refresh as RefreshIcon } from '@material-ui/icons';
import { connect } from 'react-redux';
import { getEmployees } from '../../redux/feature/employees/employees.actions';
import { setLoader } from '../../redux/feature/loaders/loaders.actions';

class EmployeesList extends Component {
  state = { search: '' };

  handleChange = event => {
    this.setState({
      search: event.target.value,
    });
  };

  renderEmployeesDetails(employees) {
    const groups = groupBy(employees, 'group');
    return Object.keys(groups).map(groupName => (
      <EmployeesListSection
        key={groupName}
        title={groupName}
        search={this.state.search}
      />
    ));
  }

  onRefreshButtonClick = () => {
    const { setLoader, getEmployees } = this.props;
    getEmployees({ force: true });
    setLoader({ name: 'employees', state: true });
  };

  render() {
    const { employees, loader } = this.props;
    return (
      <div>
        {!loader && <List component="nav">
          <TextField
            id="name"
            placeholder="חיפוש"
            value={this.state.search}
            onChange={this.handleChange}
            style={{ margin: '0 30px 10px', paddingBottom: '16px' }}
          />
          <IconButton aria-label="Refresh List" onClick={this.onRefreshButtonClick}>
            <RefreshIcon />
          </IconButton>
          <Divider />
          {this.renderEmployeesDetails(employees)}
        </List>}
        {loader && <CircularProgress size={30} thickness={5} />}
      </div>
    );
  }
}

const mapStateToProps = ({ employees: employeesStore, loaders }) => {
  const { employees: loader } = loaders;
  const { employees } = employeesStore;

  return { employees, loader };
};

export default connect(mapStateToProps, { getEmployees, setLoader })(EmployeesList);
