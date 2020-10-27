import React from 'react';
import PageContainer from '../components/PageContainer';
import styled from 'styled-components';
import { fontSize, spacing, typography } from '../styles';

const MensagemSucesso = styled.span`
  ${typography.montserrat}
  ${fontSize.medium}
`;

const MensagemWrapper = styled.div`
  padding: ${spacing.large} 0;
`;

export default function Parabens() {
  return (
    <PageContainer>
      <MensagemWrapper>
        <MensagemSucesso>Sua compra foi finalizada com sucesso!</MensagemSucesso>
      </MensagemWrapper>
    </PageContainer>
  );
}
