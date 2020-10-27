import React from 'react';
import styled from 'styled-components';
import Grade from './Grade';
import { typography, fontSize, colors } from '../styles';
import { MdCreditCard, MdLocalOffer, MdLocalShipping } from 'react-icons/md';

const color = colors.grey3;
const StyledSpan = styled.span`
  ${typography.robotoMedium}
  ${fontSize.tiny}
  color: ${colors.grey1};
  padding-left: 4px;
`;
const Informativo = ({ icone, texto }) => (
  <Grade alignItems="center">
    {icone}
    <StyledSpan>{texto}</StyledSpan>
  </Grade>
);
export default function Informativos() {
  return (
    <div>
      <Grade
        width="100%"
        padding="20px 10%"
        background={colors.grey7}
        justifyContent="space-between"
      >
        <Informativo
          icone={<MdLocalShipping size={20} color={color} />}
          texto="Delivery apenas para Joinville"
        />
        <Informativo
          icone={<MdLocalOffer size={20} color={color} />}
          texto="Desconto de 10% nas compras acima de R$ 200,00"
        />
        <Informativo
          icone={<MdCreditCard size={20} color={color} />}
          texto="Pague em até 12x no cartão"
        />
      </Grade>
    </div>
  );
}
