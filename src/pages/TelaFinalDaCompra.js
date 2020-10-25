import React, { useContext } from 'react';
import Botao from '../components/Botao';
import TextInput from '../components/TextInput';
import TituloDaPagina from '../components/TituloDaPagina';
import Subtitulo from '../components/Subtitulo';
import { useInput } from '../utils/input';
import Grade from '../components/Grade';
import { campoObrigatorio, numeroDeCaracteres, validacao } from '../utils/validacao';
import { CompraContext } from '../App';
import { enviarCompra } from '../api';
import PageContainer from '../components/PageContainer';

export default function TelaFinalDaCompra() {
  const { itens } = useContext(CompraContext);
  const rua = useInput('', campoObrigatorio);
  const bairro = useInput('', campoObrigatorio);
  const numero = useInput('', campoObrigatorio);
  const numeroCartao = useInput('', (valor) => numeroDeCaracteres(valor, 12));
  const cvc = useInput('', (valor) => numeroDeCaracteres(valor, 3));
  const formulario = [rua, bairro, numero, numeroCartao, cvc];

  async function salvarCompra(event) {
    event.preventDefault();
    if (!validacao(formulario)) {
      alert('Verifique os campos e tente novamente');
      return;
    }
    try {
      const payload = {
        itens,
        endereco: {
          rua: rua.value,
          bairro: bairro.value,
          numero: parseInt(numero.value),
        },
        cartao: {
          numero: numeroCartao.value,
          cvc: cvc.value,
        },
      };
      await enviarCompra(payload);
      alert('Compra finalizada com sucesso');
    } catch (erro) {
      alert('Não foi possível finalizar sua compra. Tente novamente mais tarde.');
    }
  }

  return (
    <PageContainer>
      <TituloDaPagina>Finalização da Compra</TituloDaPagina>
      <form onSubmit={salvarCompra}>
        <Subtitulo>Endereço</Subtitulo>
        <TextInput label="Rua" {...rua} width="400px" />
        <TextInput label="Bairro" {...bairro} />
        <TextInput label="Número" {...numero} somenteNumeros />
        <Subtitulo>Pagamento</Subtitulo>
        <TextInput
          label="Número do Cartão"
          {...numeroCartao}
          maxLength={12}
          somenteNumeros
        />
        <TextInput label="CVC" {...cvc} maxLength={3} somenteNumeros />
        <Grade>
          <Grade item xs="12" md="4">
            <Botao texto="Finalizar pedido" />
          </Grade>
        </Grade>
      </form>
    </PageContainer>
  );
}
