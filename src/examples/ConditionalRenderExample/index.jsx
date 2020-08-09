import React from 'react';
import { Paper, Typography, Divider } from '@material-ui/core';

const GreenLightMessage = () => <p> Siga! </p>;

const TrafficLight = ({ isGreenLight }) => (
  <div>
    <p> O sinal está verde ?</p>
    <p> {isGreenLight ? 'Sim' : 'Não'}</p>

    {isGreenLight && <GreenLightMessage />}
  </div>
);

const ConditionalRenderExample = () => (
  <>
    <Typography>
      Renderização condicional no React funciona da mesma forma que uma
      instrução <code>if</code>, caso a condicional for verdadeira o componente
      informado será renderizado. Geralmente é usado com{' '}
      <a href="https://dev.to/witaylor/short-circuit-conditionals-in-javascript-54i2">
        Short Circuit Conditional
      </a>
      &nbsp; como no exemplo abaixo.
    </Typography>

    <Paper elevation={0}>
      <TrafficLight isGreenLight />
      <Divider />
      <TrafficLight />
    </Paper>
  </>
);

export default ConditionalRenderExample;
