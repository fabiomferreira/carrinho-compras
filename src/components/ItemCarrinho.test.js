import React from 'react'
import { render } from '@testing-library/react';
import ItemCarrinho from './ItemCarrinho';

test('Teste itemcarrinho', () => {
  const { getByText } = render(<ItemCarrinho />);
  const textoDescritivo = getByText('item-carrinho')
  expect(textoDescritivo).toBeInTheDocument();
});