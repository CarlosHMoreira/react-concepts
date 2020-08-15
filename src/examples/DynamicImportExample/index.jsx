import React from 'react';
import { Typography, Divider } from '@material-ui/core';

import { CodeBlock } from '../../components';

const usualImport = `import { add } from './math';

console.log(add(16, 26));`;

const usingImportSintaxe = `import("./math").then(math => {
    console.log(math.add(16, 26));
});`;

const DynamicImportExample = () => (
  <>
    <Typography>
      De acordo com a documentação do React a melhor forma de fazer o&nbsp;
      <em>code-splitting</em> é usando a sintaxe <code>import()</code>
    </Typography>

    <Divider />
    <Typography>
      Exemplo usando a importação de um módulo normalmente.
    </Typography>
    <CodeBlock language="js" code={usualImport}></CodeBlock>

    <Divider />
    <Typography>Exemplo usando import()</Typography>
    <CodeBlock language="js" code={usingImportSintaxe}></CodeBlock>
  </>
);

export default DynamicImportExample;
