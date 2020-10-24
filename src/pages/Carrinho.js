import React, { useEffect, useState } from 'react';
import { obterItensDoCarrinho, obterPoliticasComerciais } from '../api';
import ItemCarrinho from '../components/ItemCarrinho';
import TituloDaPagina from '../components/TituloDaPagina';
import styled from 'styled-components';

const politicaValorMinimo = 'valor_minimo';
const politicaQuantidadeMinima = 'quantidade_itens_minima';

export default function Carrinho() {
  const [itens, setItens] = useState([]);
  const [politicasComerciais, setPoliticasComerciais] = useState();
  const [totalSemDesconto, setTotalSemDesconto] = useState();
  const [valorDoDesconto, setValorDoDesconto] = useState();

  useEffect(() => {
    obterDados();
  }, []);

  useEffect(() => {
    calculaValorTotal();
  }, [politicasComerciais, itens]);

  function calculaValorTotal() {
    if (!politicasComerciais || !itens.length) return;
    let totalBruto = 0;
    itens.forEach((item) => {
      totalBruto += item.valor * item.quantidade;
    });

    const indiceDescontoPorQuantidade = politicasComerciais.findIndex(
      (pol) => pol.tipo === politicaQuantidadeMinima
    );
    const indiceDescontoPorValor = politicasComerciais.findIndex(
      (pol) => pol.tipo === politicaValorMinimo
    );

    politicasComerciais[indiceDescontoPorQuantidade].seAplica =
      itens.length >= politicasComerciais[indiceDescontoPorQuantidade].valor;

    politicasComerciais[indiceDescontoPorValor].seAplica =
      totalBruto >= politicasComerciais[indiceDescontoPorValor].valor;

    const politicasQueSeAplicamOrdenadasPorPorcentagem = politicasComerciais
      .filter((pol) => pol.seAplica)
      .sort((polA, polB) => polA.desconto_percentual < polB.desconto_percentual);

    let porcentagemDesconto = 0;
    if (politicasQueSeAplicamOrdenadasPorPorcentagem.length) {
      porcentagemDesconto =
        politicasQueSeAplicamOrdenadasPorPorcentagem[
          politicasQueSeAplicamOrdenadasPorPorcentagem.length - 1
        ].desconto_percentual;
    }

    const valorDesconto = (totalBruto * porcentagemDesconto) / 100;

    setTotalSemDesconto(totalBruto);
    setValorDoDesconto(valorDoDesconto);

    console.log(totalBruto, porcentagemDesconto, valorDesconto);
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
    setPoliticasComerciais(data);
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
