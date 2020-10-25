import React from 'react';
import Grade from './Grade';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors, fontSize, spacing, typography } from '../styles';

export default function LinhaDoResumo({ esquerda, direita, total }) {
  return (
    <Grade justifyContent="space-between" dataTestId="linha-do-resumo">
      <TextoEsquerda data-testid="esquerda" total={total}>
        {esquerda}
      </TextoEsquerda>
      <TextoDireita data-testid="direita" total={total}>
        {direita}
      </TextoDireita>
    </Grade>
  );
}

LinhaDoResumo.propTypes = {
  esquerda: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  direita: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  total: PropTypes.bool,
};

const TextoEsquerda = styled.span`
  line-height: ${({ total }) => (total ? spacing.extraMedium : spacing.medium)};
  color: ${({ total }) => (total ? colors.grey1 : colors.grey2)};
  ${({ total }) => (total ? typography.robotoBold : typography.robotoRegular)}
  ${({ total }) => (total ? fontSize.medium : fontSize.small)}
`;
const TextoDireita = styled.span`
  line-height: ${({ total }) => (total ? spacing.extraMedium : spacing.medium)};
  color: ${({ total }) => (total ? colors.grey1 : colors.grey2)};
  ${({ total }) => (total ? typography.robotoBold : typography.robotoMedium)}
  ${({ total }) => (total ? fontSize.medium : fontSize.small)}
`;
