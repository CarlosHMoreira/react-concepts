import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const Header = ({ onMenuIconClick }) => (
  <AppBar position="static">
    <Toolbar>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={onMenuIconClick}
      >
        <MenuIcon />
      </IconButton>
      <Typography component="h1" variant="h4">
        React - Principais conceitos
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
