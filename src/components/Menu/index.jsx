import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const Menu = ({ onClose, isOpened, children }) => {
  const classes = useStyles();

  return (
    <>
      <Drawer anchor="bottom" open={isOpened} onClose={onClose}>
        <div
          className={clsx(classes.list, classes.fullList)}
          role="presentation"
          onClick={onClose}
          onKeyDown={onClose}
        >
          {children}
        </div>
      </Drawer>
    </>
  );
};

export default Menu;
