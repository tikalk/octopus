import React from 'react';

import { connect } from 'react-redux';

import Header from './Header';
import EmployeesList from './EmployeesList/index';

import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { getEmployees } from '../redux/feature/employees/employees.actions';
import { getTopics } from '../redux/feature/topics/topics.actions';
import TopicView from './TopicView';
import { setLoader } from '../redux/feature/loaders/loaders.actions';

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    position: 'relative',
    display: 'flex',
    direction: 'rtl',
    height: '90vh',
  },
  drawerPaper: {
    position: 'relative',
    width: 280,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0,
    width: '100%',
    overflow: 'auto',
  },
});

class Home extends React.Component {

  componentDidMount() {
    const { getEmployees, getTopics, setLoader } = this.props;
    setLoader({ name: 'employees', state: true });
    getEmployees({});
    getTopics({});
  }

  handleTopicClick = ({ topic, employee }) => {
    const { topicSelected, employeeSelected } = this.props;
    topicSelected({ topic, employee });
    employeeSelected(employee);
  };

  render() {
    const { classes } = this.props;
    const { topicData, selectedTopic, selectedEmployee, topicLoader } = this.props;
    return <div>
      <Header />

      <div className={classes.root}>
        <Drawer
          variant="permanent"
          style={{ borderLeft: '1px solid #ECECEC' }}
          classes={{ paper: classes.drawerPaper }}
        >
          <EmployeesList />
        </Drawer>

        <main className={classes.content}>
          {topicData &&
          <TopicView
            topic={selectedTopic} employee={selectedEmployee} topicData={topicData}
            loader={topicLoader}
          />}
        </main>
      </div>


    </div>;
  };
}

const mapStateToProps = ({ employees: employeesStore, topics: topicsStore, loaders }) => {
  const { selectedEmployee } = employeesStore;
  const { topicData, selectedTopic } = topicsStore;
  const { topic: topicLoader } = loaders;
  return { topicData, selectedTopic, selectedEmployee, topicLoader };
};

export default connect(mapStateToProps, {
  getEmployees,
  getTopics,
  setLoader,
})(withStyles(styles)(Home));
