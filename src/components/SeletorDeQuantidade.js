import React from 'react';
import { MdAdd, MdRemove } from 'react-icons/md';
import { colors, fontSize, spacing } from '../styles';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const tamanhoDoIcone = 20;
export default function SeletorDeQuantidade({ value, onChange }) {
  function incrementa() {
    onChange(value + 1);
  }

  function decrementa() {
    if (value === 1) return;
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

SeletorDeQuantidade.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

const Container = styled.div`
  border: 1px solid ${colors.grey6};
  border-radius: 5px;
  padding: 0.125rem 0.25rem;
  display: flex;
  width: 100px;
  justify-content: space-between;
  align-items: center;
  background: ${colors.white};
`;

const BotaoWrapper = styled.div`
  cursor: pointer;
  display: flex;
`;
const ValueWrapper = styled.span`
  ${fontSize.small}
  line-heiht: ${spacing.small};
`;
