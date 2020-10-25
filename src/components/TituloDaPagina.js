import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fontSize, spacing, typography } from '../styles';

export default function TituloDaPagina(props) {
  return (
    <Container>
      <Titulo>{props.children}</Titulo>
    </Container>
  );
}

TituloDaPagina.propTypes = {
  children: PropTypes.node.isRequired,
};

const Titulo = styled.h2`
  ${typography.montserrat}
  ${fontSize.large}
`;

const Container = styled.div`
  margin: ${spacing.extraMedium} 0;
  text-align: center;
`;
