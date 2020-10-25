import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function Grade(props) {
  const { item, md, xs } = props;
  return (
    <Container data-testid="grade" style={props} item={item} md={md} xs={xs}>
      {props.children}
    </Container>
  );
}

const Container = styled.div`
  display: ${({ item }) => item || 'flex'};
  height: 100%;
  flex-basis: ${({ md }) => (md / 12) * 100}%;
  box-sizing: border-box;
  @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait) {
    flex-basis: ${({ xs }) => (xs / 12) * 100}%;
    flex-wrap: wrap;
  }
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
  md: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  xs: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
