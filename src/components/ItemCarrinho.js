import React from 'react'

export default function ItemCarrinho({ id, nome, valor, quantidade, urlImagem, sku }) {
  return (
    <>
      <img src={urlImagem} alt={nome} />
      <span>item-carrinho</span>
    </>
  )
}