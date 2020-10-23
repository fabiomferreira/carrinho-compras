import React from 'react';
import { MdAdd, MdRemove } from 'react-icons/md';
import { colors, fontSize } from '../styles';
import styled from 'styled-components';

const tamanhoDoIcone = 24;
export default function SeletorDeQuantidade({ value, onChange }) {
  function incrementa() {
    onChange(value + 1);
  }

  function decrementa() {
    onChange(value - 1);
  }

  return (
    <Container>
      <BotaoWrapper data-testid="decrementa" onClick={decrementa}>
        <MdRemove color={colors.grey3} size={tamanhoDoIcone} />
      </BotaoWrapper>
      <ValueWrapper>{value}</ValueWrapper>
      <BotaoWrapper data-testid="incrementa" onClick={incrementa}>
        <MdAdd color={colors.base} size={tamanhoDoIcone} />
      </BotaoWrapper>
    </Container>
  );
}

const Container = styled.div`
  border: 1px solid ${colors.grey6};
  border-radius: 5px;
  padding: 0.125rem 0.25rem;
  display: flex;
  width: 120px;
  justify-content: space-between;
  align-items: center;
`;

const BotaoWrapper = styled.div`
  cursor: pointer;
`;
const ValueWrapper = styled.span`
  font-size: ${fontSize.small};
`;
