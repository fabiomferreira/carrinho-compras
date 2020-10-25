import React, { useContext, useEffect, useState } from 'react';
import { obterItensDoCarrinho, obterPoliticasComerciais } from '../api';
import ItemCarrinho from '../components/ItemCarrinho';
import TituloDaPagina from '../components/TituloDaPagina';
import Grade from '../components/Grade';
import { spacing } from '../styles';
import ResumoDoPedido from '../components/ResumoDoPedido';
import { CompraContext } from '../App';
import PageContainer from '../components/PageContainer';

const politicaValorMinimo = 'valor_minimo';
const politicaQuantidadeMinima = 'quantidade_itens_minima';

export default function Carrinho() {
  const { itens, setItens } = useContext(CompraContext);
  const [politicasComerciais, setPoliticasComerciais] = useState();
  const [totalSemDesconto, setTotalSemDesconto] = useState();
  const [valorDoDesconto, setValorDoDesconto] = useState();

  useEffect(() => {
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
          observacao: '',
        }))
      );
    }

    async function obterPoliticasDeDesconto() {
      const { data } = await obterPoliticasComerciais();
      setPoliticasComerciais(data);
    }
    function obterDados() {
      obterItens();
      obterPoliticasDeDesconto();
    }
    obterDados();
  }, []);

  useEffect(() => {
    function calculaValorTotal() {
      if (!politicasComerciais) return;
      if (!itens.length) {
        setTotalSemDesconto(0);
        setValorDoDesconto(0);
        return;
      }
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
      setValorDoDesconto(valorDesconto);
    }
    calculaValorTotal();
  }, [politicasComerciais, itens]);

  function onChangeQuantidade(quantidade, id) {
    const indiceDoItem = itens.findIndex((item) => item.id === id);
    const itemModificado = itens[indiceDoItem];
    itemModificado.quantidade = quantidade;
    atualizaItem(indiceDoItem, itemModificado);
  }

  function onRemove(id) {
    let result = window.confirm('Tem certeza de que deseja remover o item?');
    if (!result) return;
    const indiceDoItem = itens.findIndex((item) => item.id === id);
    const aux = itens.slice();
    aux.splice(indiceDoItem, 1);
    setItens(aux);
  }

  function onChangeObservacao(observacao, id) {
    const indiceDoItem = itens.findIndex((item) => item.id === id);
    const itemModificado = itens[indiceDoItem];
    itemModificado.observacao = observacao;
    atualizaItem(indiceDoItem, itemModificado);
  }

  function atualizaItem(indice, itemModificado) {
    const aux = itens.slice();
    aux[indice] = itemModificado;
    setItens(aux);
  }

  return (
    <PageContainer>
      <TituloDaPagina>Carrinho</TituloDaPagina>
      <Grade>
        <Grade item md="8" sm="12" paddingRight={spacing.extraLarge}>
          {itens.map((item) => (
            <ItemCarrinho
              key={item.id}
              {...item}
              onChangeQuantidade={onChangeQuantidade}
              onRemove={onRemove}
              onChangeObservacao={onChangeObservacao}
            />
          ))}
        </Grade>
        <Grade item md="4" sm="12">
          <ResumoDoPedido
            quantidade={itens.length}
            subtotal={totalSemDesconto}
            desconto={valorDoDesconto}
            total={totalSemDesconto - valorDoDesconto}
          />
        </Grade>
      </Grade>
    </PageContainer>
  );
}
