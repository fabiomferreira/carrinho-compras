import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import SeletorDeQuantidade from './SeletorDeQuantidade';

let onChange = jest.fn();
const Componente = () => <SeletorDeQuantidade value={5} onChange={onChange} />;
describe('<SeletorDeQuantidade />', () => {
  beforeEach(() => {
    onChange = jest.fn();
  });

  it('Deve incrementar', () => {
    const { queryByTestId } = render(<Componente />);
    fireEvent.click(queryByTestId('incrementa'));
    expect(onChange).toBeCalledWith(6);
  });
  it('Deve decrementar', () => {
    const { queryByTestId } = render(<Componente />);
    fireEvent.click(queryByTestId('decrementa'));
    expect(onChange).toBeCalledWith(4);
  });
});
