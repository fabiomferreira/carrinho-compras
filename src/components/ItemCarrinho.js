import React from 'react';
import styled from 'styled-components';
import { colors, fontSize, spacing, typography } from '../styles';
import Grade from './Grade';
import PropTypes from 'prop-types';
import BotaoComIcone from './BotaoComIcone';
import { MdDelete } from 'react-icons/md';
import SeletorDeQuantidade from './SeletorDeQuantidade';
import { capitalize, formataDinheiro } from '../utils/formatar';
import BotaoObservacao from './BotaoComentario';

export default function ItemCarrinho({
  id,
  nome,
  valor,
  quantidade,
  urlImagem,
  sku,
  onChangeQuantidade,
  onRemove,
  observacao,
  onChangeObservacao,
}) {
  function handleQuantidade(quantidade) {
    onChangeQuantidade(quantidade, id);
  }
  function handleObservacao(event) {
    onChangeObservacao(event.target.value, id);
  }
  return (
    <Container data-testid="item-carrinho">
      <ImagemWrapper>
        <ImagemProduto data-testid="imagem-produto" src={urlImagem} alt={nome} />
      </ImagemWrapper>
      <Grade item md="6" marginRight={spacing.medium}>
        <Grade flexDirection="column" justifyContent="space-between">
          <NomeDoProduto>{capitalize(nome)}</NomeDoProduto>
          <SkuDoProduto>SKU {sku}</SkuDoProduto>
          <BotaoObservacao value={observacao} onChange={handleObservacao} />
        </Grade>
      </Grade>
      <Grade md="4">
        <Grade item md="6">
          <SeletorWrapper>
            <SeletorDeQuantidade value={quantidade} onChange={handleQuantidade} />
          </SeletorWrapper>
        </Grade>
        <Grade flexGrow="1" justifyContent="flex-end" md="6">
          <Grade
            flexDirection="column"
            alignItems="flex-end"
            justifyContent="space-between"
          >
            <TextoValor>{formataDinheiro(valor)}</TextoValor>
            <BotaoComIcone
              icon={<MdDelete color={colors.base} size={18} />}
              onClick={() => onRemove(id)}
            />
          </Grade>
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
  onRemove: PropTypes.func.isRequired,
  observacao: PropTypes.string.isRequired,
  onChangeObservacao: PropTypes.func.isRequired,
};

const alturaDoItemCarrinho = '115px';

const Container = styled.div`
  padding: ${spacing.tiny} ${spacing.tiny} ${spacing.small};
  box-sizing: border-box;
  border-bottom: 1px solid ${colors.grey6};
  display: flex;
  &:hover {
    background: ${colors.grey7};
  }
  @media only screen and (min-width: 812px) {
    height: ${alturaDoItemCarrinho};
  }
`;

const ImagemWrapper = styled.div`
  height: 90px;
  width: 90px;
  margin-right: ${spacing.large};
`;

const ImagemProduto = styled.div`
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100%;
  width: 90px;
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

const SeletorWrapper = styled.div`
  @media only screen and (min-width: 1024px) {
    margin-right: ${spacing.medium};
  }
`;
