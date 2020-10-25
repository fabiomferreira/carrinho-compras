import { useState } from 'react';

export function useInput(initialValue, funcaoDeValidacao) {
  const [value, setValue] = useState(initialValue);
  const [mensagemDeErro, setMensagemDeErro] = useState();

  function onChange(event) {
    setValue(event.target.value);
    setMensagemDeErro(funcaoDeValidacao(event.target.value));
  }

  function validaCampo() {
    let mensagem = funcaoDeValidacao(value);
    setMensagemDeErro(mensagem);
    return !mensagem;
  }

  return {
    value,
    onChange,
    mensagemDeErro,
    validaCampo,
  };
}
