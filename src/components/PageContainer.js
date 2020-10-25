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
  padding: ${spacing.mediumLarge} ${spacing.medium} ${spacing.mediumLarge}
    ${spacing.large};
`;
