import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, CssBaseline } from '@material-ui/core';
import Header from './Header';
import EmployeesList from './EmployeesList';
import TopicView from './TopicView';
import { getEmployees, employeeSelected } from './../redux/feature/employees/employees.actions';
import { getTopics, topicSelected, refreshTopicClick } from './../redux/feature/topics/topics.actions';
import { userLogOut } from './../redux/feature/auth/auth.actions';
import { setLoader } from './../redux/feature/loaders/loaders.actions';

const drawerWidth = 280;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  appBar: {},
  appBarSmallScreen: {
    width: '100%'
  },
  appBarRegularScreen: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth
  },
  appBarShift: {
    //marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1
  },
  hide: {
    display: 'none'
  },
  drawer: {
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start'
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
  },
  contentRegularScreen: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth
  },
  contentSmallScreen: {
    width: '100%',
    marginLeft: 0
  },
  contentShift: {
    // transition: theme.transitions.create('margin', {
    //   easing: theme.transitions.easing.easeOut,
    //   duration: theme.transitions.duration.enteringScreen,
    // }),
    // marginRight: 0,
  }
}));

const Home = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);
  const isSmallScreen = useSelector(state => state.ui.isSmallScreen);
  const employees = useSelector(state => state.employees.employees);
  const topics = useSelector(state => state.topics.topics);
  const selectedEmployee = useSelector(state => state.employees.selectedEmployee);
  const selectedTopic = useSelector(state => state.topics.selectedTopic);
  const employeesLoader = useSelector(state => state.loaders.employees);
  const topicLoader = useSelector(state => state.loaders.topic);
  const topicData = useSelector(state => state.topics.topicData);
  useEffect(() => {
    dispatch(getEmployees({}));
    dispatch(getTopics({}));
  }, []);

  const handleDrawerOpen = () => {
    setMenuOpen(true);
  };

  const handleDrawerClose = () => {
    setMenuOpen(false);
  };

  const handleEmployListRefreshClick = () => {
    dispatch(setLoader({ name: 'employees', state: true }))
    dispatch(getEmployees({ force: true }));
  };

  const handleEmployeeSelected = employee => {
    dispatch(employeeSelected(employee));
  };

  const handleTopicSelected = (topic, employee) => {
    dispatch(topicSelected({ topic, employee: selectedEmployee }));
  };

  const handleRefreshTopicClick = () => {
    dispatch(setLoader({ name: 'topic', state: true }))
    dispatch(refreshTopicClick());
  };

  const handleLogout = () => {
    dispatch(userLogOut());
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header
        className={clsx(classes.appBar, {
          [classes.appBarSmallScreen]: isSmallScreen,
          [classes.appBarRegularScreen]: !isSmallScreen
        })}
        isSmallScreen={isSmallScreen}
        onMenuButtonClicked={handleDrawerOpen}
        onLogoutClick={handleLogout}
      />
      <main
        className={clsx(classes.content, {
          [classes.contentSmallScreen]: isSmallScreen,
          [classes.contentRegularScreen]: !isSmallScreen
        })}
      >
        <div className={classes.drawerHeader} />

        {topicData && (
          <TopicView
            topic={selectedTopic}
            employee={selectedEmployee}
            topicData={topicData}
            loader={topicLoader}
            onRefreshButtonClick={handleRefreshTopicClick}
          />
        )}
      </main>
      <Drawer
        className={classes.drawer}
        variant={isSmallScreen ? 'temporary' : 'permanent'}
        anchor="left"
        open={menuOpen}
        classes={{
          paper: classes.drawerPaper
        }}
        onClose={handleDrawerClose}
      >
        <EmployeesList
          onEmployListRefreshClick={handleEmployListRefreshClick}
          onEmployeeSelected={handleEmployeeSelected}
          onTopicSelected={handleTopicSelected}
          employees={employees}
          topics={topics}
          selectedEmployee={selectedEmployee}
          selectedTopic={selectedTopic}
          isLoader={employeesLoader}
        />
      </Drawer>
    </div>
  );
};

export default Home;
