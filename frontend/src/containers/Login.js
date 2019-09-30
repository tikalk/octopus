import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { loginLock } from './../services/auth0';

const styles = {};
let lock;

const Login = () => {
  useEffect(() => {
    lock = loginLock('app-login');
    lock.show();

    return () => {
      lock.hide();
    };
  }, []);

  return <div id={'app-login'}></div>;
};

export default withStyles(styles)(Login);
