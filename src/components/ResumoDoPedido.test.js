import { render } from '@testing-library/react';
import React from 'react';
import ResumoDoPedido from './ResumoDoPedido';

const Componente = () => (
  <ResumoDoPedido
    quantidade={15}
    subtotal={16.66666}
    desconto={6.66666}
    total={10}
  />
);
describe('ResumoDoPedido', () => {
  it('formata subtotal', () => {
    const { queryAllByTestId } = render(<Componente />);
    console.log(queryAllByTestId('linha-do-resumo'));
  });
});
