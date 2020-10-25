import React from 'react';
import styled from 'styled-components';
import { typography, spacing } from '../styles';
import PropTypes from 'prop-types';

export default function Subtitulo(props) {
  return (
    <Container>
      <StyledSpan>{props.children}</StyledSpan>
    </Container>
  );
}

Subtitulo.propTypes = {
  children: PropTypes.node.isRequired,
};

const Container = styled.div`
  margin-bottom: ${spacing.medium};
`;

const StyledSpan = styled.span`
  ${typography.montserrat}
  font-size: ${spacing.medium};
`;
