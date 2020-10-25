import axios from 'axios';

const API_URL = 'https://5f2c373bffc88500167b8cce.mockapi.io';

export async function obterItensDoCarrinho() {
  return axios.get(`${API_URL}/carrinho`);
}

export async function obterPoliticasComerciais() {
  return axios.get(`${API_URL}/politicas-comerciais`);
}

export async function enviarCompra(compra) {
  return axios.post(`${API_URL}/carrinho`, compra);
}
