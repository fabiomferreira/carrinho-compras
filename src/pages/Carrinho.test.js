import React from 'react';
import { render, wait } from '@testing-library/react';
import Carrinho from './Carrinho';
import { obterItensDoCarrinho, obterPoliticasComerciais } from '../api';

const itens = {
  data: [
    {
      id: 1,
      nome: 'teste',
      valor_unitario: 2,
      quantidade: 3,
      url_imagem: 'https://teste.com',
      sku: '123123',
      observacao: '',
    },
    {
      id: 2,
      nome: 'teste dois',
      valor_unitario: 3,
      quantidade: 1,
      url_imagem: 'https://testeDois.com',
      sku: '321321',
      observacao: '',
    },
  ],
};

jest.mock('../api/index.js');

describe('<App />', () => {
  beforeEach(() => {
    obterItensDoCarrinho.mockResolvedValueOnce(itens);
    obterPoliticasComerciais.mockResolvedValueOnce({
      data: [
        { tipo: 'valor_minimo', valor: 200, desconto_percentual: 10 },
        { tipo: 'quantidade_itens_minima', valor: 50, desconto_percentual: 20 },
      ],
    });
  });

  it('Deve conter o mesmo número de componentes <ItemCarrinho /> que a quantidade de itens', async () => {
    const { queryAllByTestId } = render(<Carrinho />);
    expect(obterItensDoCarrinho).toBeCalled();
    await wait(() => expect(queryAllByTestId('item-carrinho')).toHaveLength(2));
  });
});
