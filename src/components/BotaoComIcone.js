import React from 'react';
import styled from 'styled-components';
import { fontSize, typography } from '../styles';
import PropTypes from 'prop-types';

export default function BotaoComIcone({ icon, text, color, onClick }) {
  return (
    <Container data-testid="botao-com-icone" onClick={onClick}>
      {icon}
      <Texto color={color}>{text}</Texto>
    </Container>
  );
}

BotaoComIcone.propTypes = {
  icon: PropTypes.node,
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

const Texto = styled.span`
  color: ${(props) => props.color};
  ${fontSize.tiny}
  ${typography.robotoMedium}
`;

const Container = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
`;
