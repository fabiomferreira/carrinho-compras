import React, { useEffect, useState } from 'react';
import { obterItensDoCarrinho } from '../api';
import ItemCarrinho from '../components/ItemCarrinho';
import TituloDaPagina from '../components/TituloDaPagina';
import styled from 'styled-components';

export default function Carrinho() {
  const [itens, setItens] = useState([]);

  useEffect(() => {
    obterDados();
  }, []);

  async function obterDados() {
    const { data } = await obterItensDoCarrinho();
    setItens(
      data.map((item) => ({
        id: item.id,
        nome: item.nome,
        valor: item.valor_unitario,
        quantidade: item.quantidade,
        urlImagem: item.url_imagem,
        sku: item.sku,
      }))
    );
  }

  function onChangeQuantidade(quantidade, id) {
    const indiceDoItem = itens.findIndex((item) => item.id === id);
    const itemModificado = itens[indiceDoItem];
    itemModificado.quantidade = quantidade;
    atualizaItem(indiceDoItem, itemModificado);
  }

  function atualizaItem(indice, itemModificado) {
    const aux = itens.slice();
    aux[indice] = itemModificado;
    setItens(aux);
  }

  return (
    <>
      <TituloDaPagina>Carrinho</TituloDaPagina>
      <ListaDeItens>
        {itens.map((item) => (
          <ItemCarrinho
            key={item.id}
            {...item}
            onChangeQuantidade={onChangeQuantidade}
          />
        ))}
      </ListaDeItens>
    </>
  );
}

const ListaDeItens = styled.div``;
