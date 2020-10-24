import React from 'react';
import styled from 'styled-components';
import { colors, fontSize, spacing, typography } from '../styles';
import Grade from './Grade';
import PropTypes from 'prop-types';
import BotaoComIcone from './BotaoComIcone';
import { MdModeComment } from 'react-icons/md';
import SeletorDeQuantidade from './SeletorDeQuantidade';
import { formataDinheiro } from '../utils/formatar';

export default function ItemCarrinho({
  id,
  nome,
  valor,
  quantidade,
  urlImagem,
  sku,
  onChangeQuantidade,
}) {
  function handleQuantidade(quantidade) {
    onChangeQuantidade(quantidade, id);
  }
  return (
    <Container data-testid="item-carrinho">
      <ImagemWrapper>
        <ImagemProduto src={urlImagem} alt={nome} />
      </ImagemWrapper>
      <Grade item flexBasis="50%" marginRight={spacing.medium}>
        <Grade flexDirection="column" justifyContent="space-between">
          <NomeDoProduto>{nome}</NomeDoProduto>
          <SkuDoProduto>SKU {sku}</SkuDoProduto>
          <BotaoComIcone
            icon={<MdModeComment color={colors.base} size={12} />}
            color={colors.base}
            text="Adicionar observação"
            onClick={() => {}}
          />
        </Grade>
      </Grade>
      <Grade item marginRight={spacing.medium}>
        <SeletorDeQuantidade value={quantidade} onChange={handleQuantidade} />
      </Grade>
      <Grade item>
        <Grade justifyContent="flex-end">
          <TextoValor>{formataDinheiro(valor)}</TextoValor>
        </Grade>
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
  onChangeQuantidade: PropTypes.func.isRequired,
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
  color: ${colors.grey1};
`;

const SkuDoProduto = styled.span`
  color: ${colors.grey4};
  ${typography.robotoMedium}
  ${fontSize.tiny}
`;

const TextoValor = styled.span`
  ${typography.robotoMedium}
  ${fontSize.small}
`;
