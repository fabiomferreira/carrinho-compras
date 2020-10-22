import React from 'react';
import MaterialIcon from 'material-icons-react';
import styled from 'styled-components';
import { fontSize, typography } from '../styles';

export default function BotaoComIcone({ icon, text, color, onClick }) {
  const Texto = styled.span`
    color: ${color};
    ${fontSize.tiny}
    ${typography.robotoMedium}
  `;
  return (
    <Container onClick={onClick}>
      <MaterialIcon icon={icon} color={color} size={12} invert />
      <Texto>{text}</Texto>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
`;
