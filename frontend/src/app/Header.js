import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Typography, Grid } from '@material-ui/core';
import { ExitToApp as LogoutIcon } from '@material-ui/icons';
import { Create as CreateIcon } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

const styles = {
  toolbar: {
    backgroundColor: '#fe885f'
  },
  font: {
    color: '#ffffff',
    marginRight: 20
  }
};



function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



const Header = ({
  onLogoutClick,
  onMenuButtonClicked,
  isSmallScreen,
  className,
  onPreFilledFormClicked,
  preFilledLink,
  onTabChanged
}) => {

  const handleChange = (event, newValue) => {
    console.log('new tab index: ' + newValue)
    setValue(newValue);
    onTabChanged(newValue);
  };

  const [value, setValue] = React.useState(0);

  return(
  <AppBar className={className}>
    <Toolbar style={styles.toolbar}>
      <Grid container justify={'space-between'} alignItems={'center'}>
        <Grid item>
          {isSmallScreen && (
            <IconButton color="inherit" aria-label="open drawer" edge="end" onClick={onMenuButtonClicked}>
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="headline" color="inherit" style={styles.font}>
            Octopus - All about Tikal
          </Typography>
        </Grid>
        <Grid item>
          <IconButton aria-label="Refresh List" onClick={onLogoutClick}>
            <LogoutIcon />
          </IconButton>
          {preFilledLink && (
            <IconButton aria-label="Create" onClick={onPreFilledFormClicked}>
              <CreateIcon />
            </IconButton>
          )}
        </Grid>
      </Grid>
    </Toolbar>
    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
      <Tab label="עובדים" {...a11yProps(0)} />
      <Tab label="מפגשים" {...a11yProps(1)} />
    </Tabs>
  </AppBar>
)};

export default withStyles(styles)(Header);
