import React from 'react'

export default function ItemCarrinho({ id, nome, valor, quantidade, urlImagem, sku }) {
  return (
    <div data-testid="item-carrinho">
      <img src={urlImagem} alt={nome} />
      <span>item-carrinho</span>
    </div>
  )
}