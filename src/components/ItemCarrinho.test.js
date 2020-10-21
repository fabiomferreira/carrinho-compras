import React from 'react'
import { render } from '@testing-library/react';
import ItemCarrinho from './ItemCarrinho';

describe('<ItemCarrinho />', () => {
  it('Deve conter texto item-carrinho', () => {
    const { getByText } = render(<ItemCarrinho />);
    const textoDescritivo = getByText('item-carrinho')
    expect(textoDescritivo).toBeInTheDocument();
  });
})