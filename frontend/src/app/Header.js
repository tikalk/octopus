import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Typography, Grid } from '@material-ui/core';
import { ExitToApp as LogoutIcon } from '@material-ui/icons';

const styles = {
  toolbar: {
    backgroundColor: '#fe885f',
    direction: 'rtl',
  },
  font: {
    color: '#ffffff',
  },
};

const Header = ({ onLogoutClick }) => (
  <AppBar position="static">
    <Toolbar style={styles.toolbar}>

      <Grid container justify={'space-between'} alignItems={'center'}>
        <Grid item>
          <Typography variant="title" color="inherit" style={styles.font}>
            Octopus - All about Tikal
          </Typography>
        </Grid>
        <Grid item>
          <IconButton aria-label="Refresh List" onClick={onLogoutClick}>
            <LogoutIcon />
          </IconButton>
        </Grid>
      </Grid>

    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(Header);
