import React from 'react';
import { render } from '@testing-library/react';
import ItemCarrinho from './ItemCarrinho';

describe('<ItemCarrinho />', () => {
  it('Deve conter nome', () => {
    const { getByText } = render(<ItemCarrinho nome="teste" />);
    expect(getByText('teste')).toBeInTheDocument();
  });

  it('Deve conter sku', () => {
    const { getByText } = render(<ItemCarrinho sku="teste-sku" />);
    expect(getByText('SKU teste-sku')).toBeInTheDocument();
  });

  it('Deve conter imagem cuja origem vem da prop urlImagem', () => {
    const urlImagem = 'http://teste.com/';
    const nome = 'produto';
    const { queryByAltText } = render(
      <ItemCarrinho urlImagem={urlImagem} nome={nome} />
    );
    const imagem = queryByAltText(nome);
    expect(imagem).toBeInTheDocument();
    expect(imagem.src).toBe(urlImagem);
  });
});
