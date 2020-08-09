import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from '../Header';
import Menu from '../Menu';

const App = () => {
  const [state, setState] = useState({
    menuIsOpen: false,
  });

  const toggleDrawer = (shouldOpen) => (event) => {
    const isKeydownTabOrShift =
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift');

    if (isKeydownTabOrShift) return;

    setState({ ...state, menuIsOpen: shouldOpen });
  };

  return (
    <>
      <CssBaseline />
      <Header onMenuIconClick={toggleDrawer(!state.menuIsOpen)} />
      <Menu isOpened={state.menuIsOpen} onClose={toggleDrawer(false)}>
        <p>Some Random Content</p>
      </Menu>
    </>
  );
};

export default App;
