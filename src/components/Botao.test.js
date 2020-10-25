import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Botao from './Botao';

const onClick = jest.fn();
const Componente = () => (
  <Botao texto="Teste" onClick={onClick} style={{ display: 'block' }} />
);
describe('<Botao />', () => {
  it('Exibe texto dentro do botao', () => {
    const { queryByText } = render(<Componente />);
    expect(queryByText('Teste')).toBeInTheDocument();
  });

  it('executa onClick ao pressionar botao', () => {
    const { queryByTestId } = render(<Componente />);
    fireEvent.click(queryByTestId('botao'));
    expect(onClick).toBeCalled();
  });

  it('transfere estilos para botão', () => {
    const { queryByTestId } = render(<Componente />);
    expect(queryByTestId('botao').getAttribute('style')).toBe('display: block;');
  });
});
