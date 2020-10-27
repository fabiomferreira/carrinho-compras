import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function Grade(props) {
  const { item, md, sm, xs, spacing } = props;
  return (
    <Container data-testid="grade" style={props} item={item} md={md} sm={sm} xs={xs}>
      {props.children}
    </Container>
  );
}

const Container = styled.div`
  display: ${({ item }) => item || 'flex'};
  height: 100%;
  flex-basis: ${({ md }) => (parseInt(md) / 12) * 100}%;
  box-sizing: border-box;
  @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait) {
    flex-basis: ${({ xs }) => (xs / 12) * 100}%;
    flex-wrap: wrap;
  }
  @media only screen and (max-device-width: 1024px) {
    flex-basis: ${({ sm }) => (sm / 12) * 100}%;
    flex-wrap: wrap;
  }
`;

Grade.propTypes = {
  children: PropTypes.node,
  item: PropTypes.bool,
  md: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  sm: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  xs: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
