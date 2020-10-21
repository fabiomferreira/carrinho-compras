import axios from 'axios'

const API_URL = 'https://5f2c373bffc88500167b8cce.mockapi.io'

export async function obterItensDoCarrinho() {
  return axios.get(`${API_URL}/carrinho`)
}