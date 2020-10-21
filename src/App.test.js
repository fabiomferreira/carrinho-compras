import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { act } from 'react-dom/test-utils';


describe('<App />', () => {
  it('Deve conter o mesmo número de componentes <ItemCarrinho /> que a quantidade de itens', () => {
    act(() => {
      jest.mock('./api/index.js', () => ({
        obterItensDoCarrinho: () => ({
          data: [{
            id: 1,
            nome: 'teste'
          }]
        })
      }))
    })
    const { getByTestId } = render(<App />)
    expect(getByTestId('item-carrinho')).toBeTruthy();
  })
})

