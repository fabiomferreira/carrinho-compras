const formatador = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export function formataDinheiro(valor) {
  return formatador.format(parseFloat(valor));
}

export function capitalize(frase) {
  let fraseFinal = '';
  const palavras = frase.toLowerCase().split(' ');

  palavras.forEach((palavra) => {
    if (palavra.length < 4) {
      fraseFinal += palavra + ' ';
    } else {
      fraseFinal += palavra.charAt(0).toUpperCase() + palavra.slice(1) + ' ';
    }
  });

  return fraseFinal.slice(0, fraseFinal.length - 1);
}
