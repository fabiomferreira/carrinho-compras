import React from 'react';
import styled from 'styled-components';
import { colors, fontSize, spacing, typography } from '../styles';
import Grade from './Grade';
import PropTypes from 'prop-types';
import BotaoComIcone from './BotaoComIcone';
import { MdModeComment, MdDelete } from 'react-icons/md';
import SeletorDeQuantidade from './SeletorDeQuantidade';
import { capitalize, formataDinheiro } from '../utils/formatar';

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
          <NomeDoProduto>{capitalize(nome)}</NomeDoProduto>
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
      <Grade flexGrow="1" justifyContent="flex-end">
        <Grade
          flexDirection="column"
          alignItems="flex-end"
          justifyContent="space-between"
        >
          <TextoValor>{formataDinheiro(valor)}</TextoValor>
          <BotaoComIcone
            icon={<MdDelete color={colors.base} size={18} />}
            onClick={() => {}}
          />
        </Grade>
      </Grade>
    </Container>
  );
}

ItemCarrinho.propTypes = {
  id: PropTypes.number,
  nome: PropTypes.string,
  valor: PropTypes.number,
  quantidade: PropTypes.number,
  urlImagem: PropTypes.string,
  sku: PropTypes.string,
  onChangeQuantidade: PropTypes.func.isRequired,
};

const alturaDoItemCarrinho = '115px';

const Container = styled.div`
  padding: ${spacing.tiny} ${spacing.tiny} ${spacing.small};
  height: ${alturaDoItemCarrinho};
  box-sizing: border-box;
  border-bottom: 1px solid ${colors.grey6};
  display: flex;
  &:hover {
    background: ${colors.grey7};
  }
`;

const ImagemWrapper = styled.div`
  height: 90px;
  overflow: hidden;
  margin-right: ${spacing.large};
`;

const ImagemProduto = styled.img`
  height: 100%;
`;

const NomeDoProduto = styled.span`
  ${typography.robotoRegular}
  ${fontSize.small}
  color: ${colors.grey1};
  line-height: ${spacing.medium};
`;

const SkuDoProduto = styled.span`
  color: ${colors.grey4};
  line-height: ${spacing.medium};
  ${typography.robotoMedium}
  ${fontSize.tiny}
`;

const TextoValor = styled.span`
  ${typography.robotoMedium}
  ${fontSize.small}
  color: ${colors.grey2};
  line-height: ${spacing.medium};
`;
