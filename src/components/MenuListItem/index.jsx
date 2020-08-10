import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';

const MenuListItem = ({ text, onClick }) => (
  <ListItem button onClick={onClick}>
    <ListItemText primary={text} />
  </ListItem>
);

export default MenuListItem;
