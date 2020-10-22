import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function Grade(props) {
  const { flexDirection, justify } = props;

  return (
    <Container flexDirection={flexDirection} justify={justify}>
      {props.children}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justify};
`;

Grade.propTypes = {
  flexDirection: PropTypes.oneOf(['row', 'column']),
  children: PropTypes.node,
  justify: PropTypes.oneOf(['center', 'flex-start', 'flex-end', 'space-between']),
};
