import { render } from '@testing-library/react';
import React from 'react';
import LinhaDoResumo from './LinhaDoResumo';

const Componente = () => (
  <LinhaDoResumo esquerda="Teste Esquerda" direita="Teste Direita" />
);
describe('<LinhaDoResumo />', () => {
  it('insere elemento esquerda', () => {
    const { queryByTestId } = render(<Componente />);
    expect(queryByTestId('esquerda').textContent).toEqual('Teste Esquerda');
  });

  it('insere elemento direita', () => {
    const { queryByTestId } = render(<Componente />);
    expect(queryByTestId('direita').textContent).toEqual('Teste Direita');
  });
});
