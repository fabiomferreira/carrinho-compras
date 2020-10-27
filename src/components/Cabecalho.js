import React, { useContext } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { MdPerson, MdPlace, MdMenu, MdShoppingCart, MdSearch } from 'react-icons/md';
import { colors, fontSize, spacing, typography } from '../styles';
import Grade from './Grade';
import styled from 'styled-components';
import { CompraContext } from '../App';
import { formataDinheiro } from '../utils/formatar';
import { useHistory } from 'react-router-dom';

const ItemSuperior = ({ icone, texto }) => (
  <Grade alignItems="center">
    {icone}
    <StyledSpan>{texto}</StyledSpan>
  </Grade>
);

const ListItem = styled.li`
  ${typography.robotoBold}
  ${fontSize.small}
text-transform: uppercase;
  display: flex;
  align-items: center;
  margin-right: ${spacing.small};
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
`;

const List = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0px;
`;

const Menu = () => (
  <nav>
    <List>
      <ListItem>
        <MdMenu style={{ marginRight: '4px' }} size={20} /> Setores
      </ListItem>
      <ListItem>Ofertas</ListItem>
    </List>
  </nav>
);

const CarrinhoValor = styled.span`
  ${typography.robotoBold}
  ${fontSize.small}
  padding-left: 4px;
`;

const CarrinhoInfoWrapper = styled.div`
  @media only screen and (max-width: 812px) {
    justify-self: flex-end;
    padding: ${spacing.tiny} 0;
  }
`;

const CarrinhoInfo = ({ valor, onClick }) => (
  <CarrinhoInfoWrapper onClick={onClick}>
    <Grade cursor="pointer">
      <MdShoppingCart color={colors.base} />
      <CarrinhoValor>{valor}</CarrinhoValor>
    </Grade>
  </CarrinhoInfoWrapper>
);

const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid ${colors.grey6};
  padding: 4px;
  ${fontSize.small}
  ${typography.robotoMedium}
  font-weight: normal;
  width: 100%;
`;

const SearchContainer = styled.div`
  width: 100%;
  position: relative;
`;

const SearchInput = (props) => (
  <SearchContainer>
    <StyledInput {...props} />
    <MdSearch
      size={20}
      style={{ cursor: 'pointer', position: 'absolute', right: '1px' }}
    />
  </SearchContainer>
);

const Container = styled.div`
  position: fixed;
  width: 100%;
  background: ${colors.white};
  z-index: 2;
`;

const Content = styled.div`
  padding: 0 ${spacing.mediumLarge};
  @media only screen and (max-width: 1023px) {
    padding: 0 ${spacing.tiny};
  }
`;

export default function Cabecalho() {
  const { valorTotal } = useContext(CompraContext);
  const history = useHistory();

  return (
    <Container id="cabecalho">
      <Content>
        <Grade margin={`${spacing.medium} 0 ${spacing.small}`}>
          <Grade justifyContent="space-between" md="12">
            <Grade item md="8" xs="4">
              <ItemSuperior
                icone={<FaWhatsapp size={20} />}
                texto="(47) 9999-9999"
              />
            </Grade>
            <Grade md="4" xs="8" justifyContent="flex-end">
              <ItemSuperior icone={<MdPerson size={20} />} texto="Arethusa" />
              <ItemSuperior
                icone={<MdPlace size={20} />}
                texto="Bom Retiro - Joinville, SC"
              />
            </Grade>
          </Grade>
        </Grade>
        <div style={{ margin: `${spacing.tiny} 0`, textAlign: 'center' }}>
          <span style={{ fontSize: '32px' }}>Loja do Fábio</span>
        </div>
        <Grade
          margin={`${spacing.tiny} 0`}
          justifyContent="space-between"
          alignItems="center"
        >
          <Menu />
          <Grade item md="4" xs="12">
            <SearchInput placeholder="O que você procura?" />
          </Grade>
          <CarrinhoInfo
            onClick={() => history.push('/')}
            valor={formataDinheiro(valorTotal)}
          />
        </Grade>
      </Content>
    </Container>
  );
}

const StyledSpan = styled.span`
  ${typography.robotoRegular}
  ${fontSize.tiny}
  padding-left: 4px;
`;
