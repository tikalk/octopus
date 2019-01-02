import React, { Component } from 'react';
import { groupBy } from 'lodash';
import EmployeesListSection from './EmployeesListSection';
import { CircularProgress, TextField, List, Divider } from '@material-ui/core';
import { connect } from 'react-redux';

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

export default connect(mapStateToProps, {})(EmployeesList);
