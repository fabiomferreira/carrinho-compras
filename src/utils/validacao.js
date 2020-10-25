export function campoObrigatorio(valor) {
  return valor ? '' : 'Campo obrigatório';
}

export function numeroDeCaracteres(valor, numero) {
  return valor.length === numero ? '' : `Campo deve conter ${numero} caracteres`;
}

export function validacao(formulario) {
  let formularioValido = true;
  formulario.forEach((campo) => {
    formularioValido = campo.validaCampo() && formularioValido;
  });

  return formularioValido;
}
