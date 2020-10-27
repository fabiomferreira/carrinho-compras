import React from 'react';
import styled from 'styled-components';
import { spacing } from '../styles';
import PropTypes from 'prop-types';

export default function PageContainer(props) {
  return <Container>{props.children}</Container>;
}

PageContainer.propTypes = {
  children: PropTypes.node,
};

const Container = styled.div`
  padding: 0px ${spacing.medium} ${spacing.mediumLarge} ${spacing.large};
  margin: 0 ${spacing.mediumLarge};
  @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait) {
    padding: 0px ${spacing.tiny} ${spacing.mediumLarge} ${spacing.tiny};
    margin: 0;
  }
`;
