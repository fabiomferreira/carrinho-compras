import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fontSize, typography } from '../styles';

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
  text-align: center;
`;
