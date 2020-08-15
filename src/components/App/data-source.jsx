import {
  ConditionalRenderExample,
  ControlledAndUncontrolledComponentExample,
  DynamicImportExample,
  ReactLazyExample,
} from '../../examples';

export default [
  {
    title: 'Renderização Condicional',
    id: 'renderizacao-condicional',
    component: ConditionalRenderExample,
  },
  {
    title: 'Componente controlado e não controlado',
    id: 'componente-controlado-nao-controlado',
    component: ControlledAndUncontrolledComponentExample,
  },
  {
    title: 'Code Splitting com import()',
    id: 'conde-splitting-com-import',
    component: DynamicImportExample,
  },
  {
    title: 'Carregando componentes assincronamente',
    id: 'react-lazy',
    component: ReactLazyExample,
  },
];
