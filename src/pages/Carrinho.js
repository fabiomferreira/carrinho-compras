import React, { useEffect, useState } from 'react';
import { obterItensDoCarrinho, obterPoliticasComerciais } from '../api';
import ItemCarrinho from '../components/ItemCarrinho';
import TituloDaPagina from '../components/TituloDaPagina';
import styled from 'styled-components';

const politicaValorMinimo = 'valor_minimo';
const politicaQuantidadeMinima = 'quantidade_itens_minima';

export default function Carrinho() {
  const [itens, setItens] = useState([]);
  const [descontoPorValor, setDescontoPorValor] = useState();
  const [descontoPorQuantidade, setDescontoPorQuantidade] = useState();

  useEffect(() => {
    obterDados();
  }, []);

  useEffect(() => {
    calculaValorTotal();
  }, [descontoPorValor, descontoPorQuantidade, itens]);

  function calculaValorTotal() {
    if (!descontoPorValor || !descontoPorQuantidade || !itens.length) return;
    console.log(descontoPorValor, descontoPorQuantidade);
  }

  function obterDados() {
    obterItens();
    obterPoliticasDeDesconto();
  }

  async function obterItens() {
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

  async function obterPoliticasDeDesconto() {
    const { data } = await obterPoliticasComerciais();
    setDescontoPorValor(
      data.find((politica) => politica.tipo === politicaValorMinimo)
    );
    setDescontoPorQuantidade(
      data.find((politica) => politica.tipo === politicaQuantidadeMinima)
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
