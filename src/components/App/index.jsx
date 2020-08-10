import React, { useRef, useState } from 'react';
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
  const dataWithRef = data.map((item) => ({ ...item, itemRef: useRef() }));
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

  const scrollToRef = (ref) => () => window.scrollTo(0, ref.current.offsetTop);

  return (
    <>
      <CssBaseline />

      <Header onMenuIconClick={toggleDrawer(!state.menuIsOpen)} />
      <Menu isOpened={state.menuIsOpen} onClose={toggleDrawer(false)}>
        {dataWithRef.map(({ title, id, itemRef }) => (
          <MenuListItem key={id} text={title} onClick={scrollToRef(itemRef)} />
        ))}
      </Menu>

      <Content>
        {dataWithRef.map(({ title, id, itemRef, component }) => (
          <Topic key={id} id={id} title={title} ref={itemRef}>
            {component}
          </Topic>
        ))}
      </Content>
    </>
  );
};

export default App;
