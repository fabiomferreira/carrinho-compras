import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import Carrinho from './Carrinho';

jest.mock('../api/index.js', () => ({
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
  obterPoliticasComerciais: () => ({
    data: [
      { tipo: 'valor_minimo', valor: 200, desconto_percentual: 10 },
      { tipo: 'quantidade_itens_minima', valor: 50, desconto_percentual: 20 },
    ],
  }),
}));

describe('<App />', () => {
  it('Deve conter o mesmo número de componentes <ItemCarrinho /> que a quantidade de itens', async () => {
    const { queryAllByTestId, findAllByTestId } = render(<Carrinho />);
    await waitForElement(() => findAllByTestId('item-carrinho'));
    expect(queryAllByTestId('item-carrinho')).toHaveLength(2);
  });
});
