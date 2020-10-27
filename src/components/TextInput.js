import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors, fontSize, spacing, typography } from '../styles';

export default function TextInput({
  value,
  onChange,
  mensagemDeErro,
  label,
  width,
  maxLength,
  somenteNumeros,
}) {
  function handleChange(event) {
    function extraiNumeros(texto) {
      return texto.match(/\d+/g);
    }
    if (somenteNumeros) {
      event.target.value = extraiNumeros(event.target.value);
      return onChange(event);
    }

    return onChange(event);
  }
  return (
    <Container width={width}>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput value={value} onChange={handleChange} maxLength={maxLength} />
      <MensagemDeErro>{mensagemDeErro}</MensagemDeErro>
    </Container>
  );
}

TextInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  mensagemDeErro: PropTypes.string,
  label: PropTypes.string,
  width: PropTypes.string,
  maxLength: PropTypes.number,
  somenteNumeros: PropTypes.bool,
};

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: ${({ width }) => width || '200px'};
  height: 80px;
  padding-bottom: ${spacing.small};
  @media only screen and (max-width: 812px) {
    width: 100%;
  }
`;

const StyledInput = styled.input`
  border: 1px solid ${colors.grey6};
  border-radius: 3px;
  height: 40px;
  ${fontSize.medium};
`;

const MensagemDeErro = styled.span`
  position: absolute;
  bottom: 4px;
  color: ${colors.base};
  ${fontSize.tiny}
`;

const StyledLabel = styled.label`
  ${typography.robotoRegular};
  margin-bottom: ${spacing.tiny};
`;
