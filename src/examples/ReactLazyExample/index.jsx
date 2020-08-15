import React from 'react';
import { Typography, Divider } from '@material-ui/core';

import { CodeBlock } from '../../components';

const usingLazy = `import { lazy } from 'react';

const OtherComponent = lazy(() => import('./OtherComponent'));
`;

const usingSuspense = `import React, { Suspense, lazy } from 'react';

const OtherComponent = lazy(() => import('./OtherComponent'));

const MyComponent = () => (
  <div>
    <Suspense fallback={<div>Loading...</div>}>
      <OtherComponent />
    </Suspense>
  </div>
);
`;
const DynamicImportExample = () => (
  <>
    <Typography>
      Uma forma de fazer o Lazy loading de um component é usando a função&nbsp;
      <code>lazy</code>.
    </Typography>

    <Divider />
    <Typography>Exemplo de importação de um componente.</Typography>
    <CodeBlock
      language="js"
      code={`import OtherComponent from './OtherComponent';`}
    ></CodeBlock>

    <Divider />
    <Typography>Exemplo usando função lazy</Typography>
    <CodeBlock language="js" code={usingLazy}></CodeBlock>
    <Divider />
    <br />

    <Typography>
      O componente carregado com a função <code>lazy</code> deve ficar dentro do
      componente <code>Suspense</code>.
    </Typography>

    <Typography>
      O componente <code>Suspense</code>&nbsp; permite mostrar um outro
      componente de fallback enquanto o componente resultante da função lazy
      ainda não carregou, você também pode colocar multiplos componentes lazy
      dentro de um componente <code>Suspense</code>.
    </Typography>

    <br />

    <Divider />
    <Typography>Exemplo usando função componente Suspense</Typography>
    <CodeBlock language="js" code={usingSuspense}></CodeBlock>
    <Divider />
  </>
);

export default DynamicImportExample;
