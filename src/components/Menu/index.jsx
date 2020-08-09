import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

const useStyles = makeStyles({
  fullList: {
    width: 'auto',
  },
});

const Menu = ({ onClose, isOpened, children }) => {
  const { fullList } = useStyles();

  return (
    <>
      <Drawer anchor="bottom" open={isOpened} onClose={onClose}>
        <div
          className={fullList}
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
