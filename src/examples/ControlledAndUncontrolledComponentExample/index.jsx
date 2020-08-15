import React, { useRef, useState } from 'react';
import { Divider, Typography } from '@material-ui/core';

import { CodeBlock } from '../../components';

const NotControlledForm = () => {
  const inputName = useRef(null);
  const inputLastName = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Value submitted: ${inputName.current.value} ${inputLastName.current.value}`
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input id="name" type="text" name="name" ref={inputName} />
      </label>
      <br />
      <label>
        Sobrenome:
        <input type="text" name="lastname" ref={inputLastName} />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
};

const notControlledFormTextDefinition = `const NotControlledForm = () => {
    const inputName = useRef(null);
    const inputLastName = useRef(null);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(
        \`Value submitted:  \${inputName.current.value}  \${inputLastName.current.value} \`
      );
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input id="name" type="text" name="name" ref={inputName} />
        </label>
        <br />
        <label>
          Sobrenome:
          <input type="text" name="lastname" ref={inputLastName} />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    );
  };`;

const ControlledForm = () => {
  const [state, setState] = useState({
    nameControlled: '',
    lastnameControlled: '',
  });

  const handleInputChange = ({ target: { value, name } }) =>
    setState({ ...state, [name]: value });

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Value submitted: ${state.nameControlled} ${state.lastnameControlled}`
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="nameControlled"
          value={state.nameControlled}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Sobrenome:
        <input
          type="text"
          name="lastnameControlled"
          value={state.lastnameControlled}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
};

const controlledFormTextDefinition = `const ControlledForm = () => {
    const [state, setState] = useState({
      nameControlled: '',
      lastnameControlled: '',
    });
  
    const handleInputChange = ({ target: { value, name } }) =>
      setState({ ...state, [name]: value });
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(
        \`Value submitted: \${state.nameControlled} \${state.lastnameControlled}\`
      );
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="nameControlled"
            value={state.nameControlled}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Sobrenome:
          <input
            type="text"
            name="lastnameControlled"
            value={state.lastnameControlled}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    );
  };`;

const ControlledAndUncontrolledComponentExample = () => (
  <>
    <Typography>
      A principal diferença entre um componente controlado e um não controlado é
      que o controlado você usa o <code>state</code> do componente pra gerenciar
      e <em>controlar</em> os dados, geralmente de um formulário. Já o
      componente não-controlado utiliza-se do próprio mecanismo de armazenamento
      de dados dos elementos do DOM, como o <code>value</code>
      &nbsp; de um elemento <code>input</code> por exemplo.
    </Typography>

    <Divider />
    <Typography>Exemplo de componente controlado.</Typography>
    <CodeBlock language="js" code={controlledFormTextDefinition}></CodeBlock>
    <ControlledForm />

    <Divider />
    <Typography>Exemplo de componente não-controlado.</Typography>
    <CodeBlock language="js" code={notControlledFormTextDefinition}></CodeBlock>
    <NotControlledForm />
  </>
);

export default ControlledAndUncontrolledComponentExample;
