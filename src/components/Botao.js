import React from 'react';
import styled from 'styled-components';
import { colors, fontSize, typography } from '../styles';
import PropTypes from 'prop-types';

export default function Botao({ texto, onClick, style }) {
  return (
    <BotaoStyled data-testid="botao" style={style} onClick={onClick}>
      {texto}
    </BotaoStyled>
  );
}

Botao.propTypes = {
  texto: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.object,
};

const BotaoStyled = styled.button`
  width: 100%;
  height: 50px;
  background: ${colors.base};
  color: ${colors.white};
  border: none;
  cursor: pointer;
  ${typography.robotoBold}
  ${fontSize.medium}
`;
