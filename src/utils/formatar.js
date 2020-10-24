const formatador = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export function formataDinheiro(valor) {
  return formatador.format(parseFloat(valor));
}
