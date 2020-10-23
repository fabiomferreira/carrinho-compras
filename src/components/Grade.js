import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function Grade(props) {
  const { item } = props;
  return (
    <Container data-testid="grade" style={props} item={item}>
      {props.children}
    </Container>
  );
}

const Container = styled.div`
  display: ${({ item }) => item || 'flex'};
  height: 100%;
`;

Grade.propTypes = {
  flexDirection: PropTypes.oneOf(['row', 'column']),
  children: PropTypes.node,
  justifyContent: PropTypes.oneOf([
    'center',
    'flex-start',
    'flex-end',
    'space-between',
  ]),
  flexBasis: PropTypes.string,
  item: PropTypes.bool,
};
