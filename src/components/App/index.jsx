import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import { Header, Menu, MenuListItem, Content, Topic } from '../index';
import { ConditionalRenderExample } from '../../examples';

const data = [
  {
    title: 'Renderização Condicional',
    id: 'renderizacao-condicional',
    component: ConditionalRenderExample,
  },
];

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
        {data.map(({ title, id }) => (
          <MenuListItem key={id} text={title} to={`#${id}`} />
        ))}
      </Menu>

      <Content>
        {data.map(({ title, id, component }) => (
          <Topic key={id} id={id} title={title}>
            {component}
          </Topic>
        ))}
      </Content>
    </>
  );
};

export default App;
