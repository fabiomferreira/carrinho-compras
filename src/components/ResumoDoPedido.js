import React from 'react';
import styled from 'styled-components';
import { colors, spacing, typography } from '../styles';
import LinhaDoResumo from './LinhaDoResumo';
import PropTypes from 'prop-types';
import { formataDinheiro } from '../utils/formatar';
import Botao from './Botao';
import { useHistory } from 'react-router-dom';

export default function ResumoDoPedido({ quantidade, subtotal, desconto, total }) {
  const history = useHistory();
  function exibeValor(valor) {
    return valor ? formataDinheiro(valor) : 'R$ 0,00';
  }
  return (
    <Container>
      <TituloWrapper>
        <Titulo>Resumo do Pedido</Titulo>
      </TituloWrapper>
      <Subtotais>
        <LinhaDoResumo esquerda="Itens" direita={quantidade} />
        <LinhaDoResumo esquerda="Total em produtos" direita={exibeValor(subtotal)} />
        <LinhaDoResumo esquerda="Descontos" direita={exibeValor(desconto)} />
      </Subtotais>
      <LinhaDoResumo esquerda="Total" direita={exibeValor(total)} total />
      <Botao
        style={{ margin: `${spacing.medium} 0 ` }}
        texto="Finalizar a compra"
        onClick={() => history.push('/final-compra')}
      />
    </Container>
  );
}

ResumoDoPedido.propTypes = {
  quantidade: PropTypes.number,
  subtotal: PropTypes.number,
  desconto: PropTypes.number,
  total: PropTypes.number,
};

const Container = styled.div`
  border: 1px solid ${colors.grey6};
  padding: 0 ${spacing.medium};
`;

const TituloWrapper = styled.div`
  padding: ${spacing.tiny} 0;
  border-bottom: 1px solid ${colors.grey6};
  margin: 0 -${spacing.medium};
  height: 50px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

const Titulo = styled.span`
  text-transform: uppercase;
  padding: 0 ${spacing.medium};
  ${typography.robotoBold};
  line-height: ${spacing.medium};
`;

const Subtotais = styled.div`
  padding: ${spacing.medium} 0;
  height: 130px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
