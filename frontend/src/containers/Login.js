import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';

import { Grid } from '@material-ui/core';
import { loginLock } from './../services/auth0';

const styles = {};
let lock;

const Login = () => {
  useEffect(() => {
    lock = loginLock('app-login');
    lock.show();

    return () => {
      lock.hide();
    }
  }, []);

  return <Grid container justify={'center'} alignItems={'center'} spacing={8}>
    <Grid item xs={5}>
      <Grid container>
        <Grid item xs={12} id={'app-login'}>

        </Grid>
      </Grid>
    </Grid>
  </Grid>;

}

export default withStyles(styles)(Login);
