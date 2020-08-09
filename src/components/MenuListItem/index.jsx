import React from 'react';
import { ListItem, ListItemText, Link } from '@material-ui/core';

const MenuListItem = ({ text, to }) => (
  <Link href={to} color="primary" variant="body1">
    <ListItem button>
      <ListItemText primary={text} />
    </ListItem>
  </Link>
);

export default MenuListItem;
