import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Home from './app/Home';
import { Route, Switch, withRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import LogIn from './containers/Login';
import { windowIsBeingResized } from './redux/feature/ui/ui.actions';

const App = ({ match }) => {
  const dispatch = useDispatch();

  const resizeHandler = () => {
    dispatch(windowIsBeingResized({ width: window.innerWidth, height: window.innerHeight }));
  };

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return (
    <Switch>
      <Route exact path="/" component={LogIn} />
      <Route path="/app" component={Home} />
    </Switch>
  );
};

export default withRouter(hot(module)(App));
