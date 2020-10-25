import React from 'react';
import { render } from '@testing-library/react';
import ItemCarrinho from './ItemCarrinho';

const onChangeQuantidade = jest.fn();
const Componente = () => (
  <ItemCarrinho
    nome="teste"
    sku="teste-sku"
    urlImagem="http://teste.com/"
    onChangeQuantidade={onChangeQuantidade}
  />
);

describe('<ItemCarrinho />', () => {
  it('Deve conter nome', () => {
    const { getByText } = render(<Componente />);
    expect(getByText('Teste')).toBeInTheDocument();
  });

  it('Deve conter sku', () => {
    const { getByText } = render(<Componente />);
    expect(getByText('SKU teste-sku')).toBeInTheDocument();
  });

  it('Deve conter imagem cuja origem vem da prop urlImagem', () => {
    const urlImagem = 'http://teste.com/';
    const nome = 'teste';
    const { queryByAltText } = render(<Componente />);
    const imagem = queryByAltText(nome);
    expect(imagem).toBeInTheDocument();
    expect(imagem.src).toBe(urlImagem);
  });

  it('Deve conter dois botões com ícone', () => {
    const { queryAllByTestId } = render(<Componente />);
    expect(queryAllByTestId('botao-com-icone')).toHaveLength(2);
  });
});
