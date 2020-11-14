import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import clsx from 'clsx';
import { get } from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, CssBaseline } from '@material-ui/core';
import Header from './Header';
import EmployeesList from './EmployeesList';
import TopicView from './TopicView';
import {
  getEmployees,
  employeeSelected,
  userChangedFilter,
  userClearedAllFilters,
} from './../redux/feature/employees/employees.actions';
import {
  getTopics,
  topicSelected,
  refreshTopicClick,
  preFilledFormClicked,
  setFormDialogState,
  editFormButtonClicked,
} from './../redux/feature/topics/topics.actions';
import { userLogOut } from './../redux/feature/auth/auth.actions';
import { setLoader } from './../redux/feature/loaders/loaders.actions';
import FormDialog from './FormDialog';

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {},
  appBarSmallScreen: {
    width: '100%',
  },
  appBarRegularScreen: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  appBarShift: {
    //marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  contentRegularScreen: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  contentSmallScreen: {
    width: '100%',
    marginLeft: 0,
  },
  contentShift: {
    // transition: theme.transitions.create('margin', {
    //   easing: theme.transitions.easing.easeOut,
    //   duration: theme.transitions.duration.enteringScreen,
    // }),
    // marginRight: 0,
  },
}));

const Home = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);
  const isSmallScreen = useSelector((state) => state.ui.isSmallScreen);
  const employees = useSelector((state) => state.employees.employees);
  const topics = useSelector((state) => state.topics.topics);
  const selectedEmployee = useSelector((state) => state.employees.selectedEmployee);
  const selectedTopic = useSelector((state) => state.topics.selectedTopic);
  const employeesLoader = useSelector((state) => state.loaders.employees);
  const topicLoader = useSelector((state) => state.loaders.topic);
  const topicData = useSelector((state) => state.topics.topicData);
  const formDialogOpen = useSelector((state) => state.topics.formDialogOpen);
  const preFilledFormURL = useSelector((state) => state.topics.preFilledFormURL);
  const preFilledFormShortURL = useSelector((state) => state.topics.preFilledFormShortURL);
  const me = useSelector((state) => state.employees.me);
  const filter = useSelector(({ employees: { filter } }) => filter);
  const [width, height] = useSelector(({ ui: { width, height } }) => [width, height]);

  const editUrl = useMemo(() => get(topicData, '0.editUrl'), [topicData]);

  useEffect(() => {
    dispatch(getEmployees({}));
    dispatch(getTopics({ force: true }));
  }, []);

  const handleDrawerOpen = useCallback(() => {
    setMenuOpen(true);
  });

  const handleDrawerClose = useCallback(() => {
    setMenuOpen(false);
  });

  const handleEmployListRefreshClick = useCallback(() => {
    dispatch(setLoader({ name: 'employees', state: true }));
    dispatch(getEmployees({ force: true }));
  });

  const handleEmployeeSelected = useCallback((employee) => {
    dispatch(employeeSelected(employee));
  });

  const handleTopicSelected = useCallback((topic, employee) => {
    dispatch(topicSelected({ topic, employee: selectedEmployee }));
  });

  const handleRefreshTopicClick = useCallback(() => {
    dispatch(setLoader({ name: 'topic', state: true }));
    dispatch(refreshTopicClick());
  });

  const handleLogout = useCallback(() => {
    dispatch(userLogOut());
  });

  const handlePreFilledFormClicked = useCallback(() => {
    dispatch(preFilledFormClicked({ topic: selectedTopic, employee: selectedEmployee }));
  });

  const handleEditFormButtonClicked = useCallback(() => {
    dispatch(editFormButtonClicked({ editUrl }));
  });

  const handleFormDialogBackClicked = useCallback(() => {
    dispatch(setFormDialogState(false));
  });

  const handleFilterChanged = useCallback((name) => {
    dispatch(userChangedFilter({ name }));
  });

  const handleOnClearAllFilters = useCallback(() => {
    dispatch(userClearedAllFilters());
  });

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header
        className={clsx(classes.appBar, {
          [classes.appBarSmallScreen]: isSmallScreen,
          [classes.appBarRegularScreen]: !isSmallScreen,
        })}
        isSmallScreen={isSmallScreen}
        onMenuButtonClicked={handleDrawerOpen}
        onLogoutClick={handleLogout}
        preFilledLink={selectedTopic.preFilledLink}
        onPreFilledFormClicked={handlePreFilledFormClicked}
        editUrl={editUrl}
        onEditFormButtonClicked={handleEditFormButtonClicked}
      />
      <main
        className={clsx(classes.content, {
          [classes.contentSmallScreen]: isSmallScreen,
          [classes.contentRegularScreen]: !isSmallScreen,
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
          paper: classes.drawerPaper,
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
          filter={filter}
          onFilterChange={handleFilterChanged}
          onClearAllFilters={handleOnClearAllFilters}
          me={me}
        />
      </Drawer>
      <FormDialog
        open={formDialogOpen}
        onBackClicked={handleFormDialogBackClicked}
        preFilledFormURL={preFilledFormURL}
        preFilledFormShortURL={preFilledFormShortURL}
        width={width}
        height={height}
      />
    </div>
  );
};

export default Home;
