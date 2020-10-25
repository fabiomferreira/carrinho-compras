import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { fontSize, typography, colors } from '../styles';
import PropTypes from 'prop-types';
import { MdModeComment } from 'react-icons/md';

export default function BotaoObservacao({ value, onChange }) {
  const [modoEdicao, setModoEdicao] = useState(false);
  const container = useRef();
  const input = useRef();

  function onClick() {
    // if (modoEdicao) return;
    setModoEdicao((valor) => !valor);
  }

  function onKeyPress(event) {
    if (event.key !== 'Enter') return;
    setModoEdicao(false);
  }

  useEffect(() => {
    function handleEdicao() {
      if (!modoEdicao) return;
      input.current.focus();
    }
    handleEdicao();
  }, [modoEdicao]);

  useEffect(() => {
    function handleCliqueFora(event) {
      if (container.current && !container.current.contains(event.target)) {
        setModoEdicao(false);
      }
    }
    document.addEventListener('mousedown', handleCliqueFora);
    return () => {
      document.removeEventListener('mousedown', handleCliqueFora);
    };
  }, [container]);

  return (
    <Container ref={container} data-testid="botao-com-icone" onClick={onClick}>
      <IconWrapper>
        <MdModeComment color={colors.base} size={12} />
      </IconWrapper>
      {modoEdicao ? (
        <Input
          ref={input}
          value={value}
          onChange={onChange}
          onKeyPress={onKeyPress}
          placeholder="Escreva sua observação"
        />
      ) : (
        <Texto editado={value}>{value || 'Adicionar observação'}</Texto>
      )}
    </Container>
  );
}

BotaoObservacao.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const Texto = styled.span`
  ${fontSize.tiny}
  ${typography.robotoMedium}
  ${({ editado }) =>
    editado
      ? `
font-style: italic;
font-weight: normal;
`
      : `
color: ${colors.base};
`}
`;

const Container = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
`;

const IconWrapper = styled.div`
  margin-right: 4px;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${colors.grey6};
  padding: 0.125rem;
  width: 150px;
  ${fontSize.tiny}
  ${typography.robotoMedium}
  font-weight: normal;
  margin-top: -1px;
`;
