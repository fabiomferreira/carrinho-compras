import React from 'react';
import styled from 'styled-components';
import { colors, fontSize, spacing, typography } from '../styles';
import Grade from './Grade';
import PropTypes from 'prop-types';
import BotaoComIcone from './BotaoComIcone';

export default function ItemCarrinho({
  id,
  nome,
  valor,
  quantidade,
  urlImagem,
  sku,
}) {
  return (
    <Container data-testid="item-carrinho">
      <ImagemWrapper>
        <ImagemProduto src={urlImagem} alt={nome} />
      </ImagemWrapper>
      <Grade flexDirection="column" justify="space-between">
        <NomeDoProduto>{nome}</NomeDoProduto>
        <SkuDoProduto>SKU {sku}</SkuDoProduto>
        <BotaoComIcone
          icon="mode_comment_outlined"
          color={colors.base}
          text="Adicionar observação"
          onClick={() => {}}
        />
      </Grade>
    </Container>
  );
}

ItemCarrinho.propTypes = {
  id: PropTypes.number,
  nome: PropTypes.string,
  valor: PropTypes.string,
  quantidade: PropTypes.string,
  urlImagem: PropTypes.string,
  sku: PropTypes.string,
};

const alturaDoItemCarrinho = '115px';

const Container = styled.div`
  padding: ${spacing.tiny} ${spacing.tiny} ${spacing.small};
  height: ${alturaDoItemCarrinho};
  box-sizing: border-box;
  border: 1px solid ${colors.grey7};
  display: flex;
`;

const ImagemWrapper = styled.div`
  width: 90px;
  overflow: hidden;
`;

const ImagemProduto = styled.img`
  height: 100%;
  margin-right: ${spacing.large};
`;

const NomeDoProduto = styled.span`
  ${typography.robotoRegular}
  ${fontSize.small}
`;

const SkuDoProduto = styled.span`
  color: ${colors.grey4};
  ${typography.robotoMedium}
  ${fontSize.tiny}
`;
