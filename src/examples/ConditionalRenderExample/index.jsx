import React from 'react';
import { Paper, Typography, Divider } from '@material-ui/core';

import { CodeBlock } from '../../components';
const GreenLightMessage = () => <p style={{ color: 'limegreen' }}> Siga! </p>;

const TrafficLight = ({ isGreenLight }) => (
  <div>
    <p> O sinal está verde ?</p>
    <p> {isGreenLight ? 'Sim' : 'Não'}</p>

    {isGreenLight && <GreenLightMessage />}
  </div>
);

const componentsDefinition = `const GreenLightMessage = () => <p style={{ color: 'limegreen' }}> Siga! </p>;

const TrafficLight = ({ isGreenLight }) => (
<div>
    <p> O sinal está verde ?</p>
    <p> {isGreenLight ? 'Sim' : 'Não'}</p>

    {isGreenLight && <GreenLightMessage />}
</div>
);`;

const ConditionalRenderExample = () => (
  <>
    <Typography>
      Renderização condicional no React funciona da mesma forma que uma
      instrução <code>if</code>, caso a condicional for verdadeira o componente
      informado será renderizado. Geralmente é usado com&nbsp;
      <a href="https://dev.to/witaylor/short-circuit-conditionals-in-javascript-54i2">
        Short Circuit Conditional
      </a>
      &nbsp; como no exemplo abaixo.
    </Typography>

    <Paper elevation={0}>
      <Typography>
        Temos como exemplo os componentes&nbsp;
        <strong>GreenLightMessage</strong> e&nbsp;
        <strong>TrafficLight</strong>.
      </Typography>

      <CodeBlock language="js" code={componentsDefinition} />

      <Typography>
        Ao chamar o componente passando o valor da condicional como verdadeiro,
        ou seja <code> isGreenLight </code> como <code> true </code> temos o
        seguinte resultado
      </Typography>

      <CodeBlock language="html" code={`<TrafficLight isGreenLight />`} />
      <TrafficLight isGreenLight />

      <Divider />

      <Typography>
        Ao chamar o componente passando o valor da condicional como false, ou
        seja não informando o atributo <code> isGreenLight </code>, temos como
        resultado a não renderização do componente{' '}
        <strong>GreenLightMessage</strong>.
      </Typography>

      <CodeBlock language="html" code={`<TrafficLight />`} />

      <TrafficLight />
    </Paper>
  </>
);

export default ConditionalRenderExample;
