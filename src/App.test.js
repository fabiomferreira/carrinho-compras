import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import App from './App';

jest.mock('./api/index.js', () => ({
  obterItensDoCarrinho: () => ({
    data: [
      {
        id: 1,
        nome: 'teste',
      },
      {
        id: 2,
        nome: 'teste dois',
      },
    ],
  }),
}));

describe('<App />', () => {
  it('Deve conter o mesmo número de componentes <ItemCarrinho /> que a quantidade de itens', async () => {
    const { queryAllByTestId, findAllByTestId } = render(<App />);
    await waitForElement(() => findAllByTestId('item-carrinho'));
    expect(queryAllByTestId('item-carrinho')).toHaveLength(2);
  });
});
