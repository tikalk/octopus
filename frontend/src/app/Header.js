import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Typography, Grid } from '@material-ui/core';
import { ExitToApp as LogoutIcon } from '@material-ui/icons';
import { AddCircle as AddIcon, Edit as EditIcon } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  toolbar: {
    backgroundColor: '#fe885f',
  },
  font: {
    color: '#ffffff',
    marginRight: 20,
  },
};

const Header = ({
  onLogoutClick,
  onMenuButtonClicked,
  isSmallScreen,
  className,
  onPreFilledFormClicked,
  preFilledLink,
  editUrl,
  onEditFormButtonClicked,
}) => (
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
          {editUrl && (
            <IconButton aria-label="Edit" onClick={onEditFormButtonClicked}>
              <EditIcon />
            </IconButton>
          )}
          {preFilledLink && (
            <IconButton aria-label="Create" onClick={onPreFilledFormClicked}>
              <AddIcon />
            </IconButton>
          )}
          |
          <IconButton aria-label="Refresh List" onClick={onLogoutClick}>
            <LogoutIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
);

export default React.memo(withStyles(styles)(Header));
