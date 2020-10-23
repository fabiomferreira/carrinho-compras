import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import BotaoComIcone from './BotaoComIcone';

const onClick = jest.fn();
const componente = (
  <BotaoComIcone
    icon="dashboard"
    text="texto-teste"
    color="#cecece"
    onClick={onClick}
  />
);
describe('<BotaoComIcone />', () => {
  it('Deve conter icone passado por props', () => {
    const { queryByText } = render(componente);
    expect(queryByText('dashboard')).toBeInTheDocument();
  });

  it('Deve conter texto passado por props', () => {
    const { queryByText } = render(componente);
    expect(queryByText('texto-teste')).toBeInTheDocument();
  });

  it('Texto deve conter cor passada por props', () => {
    const { queryByText } = render(componente);
    expect(queryByText('texto-teste').getAttribute('color')).toEqual('#cecece');
  });

  it('Função onClick deve ser chamada ao clicar sobre o componente', () => {
    const { queryByTestId } = render(componente);
    fireEvent.click(queryByTestId('botao-com-icone'));
    expect(onClick).toBeCalled();
  });
});
