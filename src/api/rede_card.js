import axios from "axios";
import { BASE_URL } from './api';

export const getRedeCards = async () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('Token não encontrado');

    const { data } = await axios.get(`${BASE_URL}/rede_card_transactions`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    });
    return data;
  } catch (error) {
    console.error("Erro ao buscar redes de cartão:", error);
    throw error;
  }
};

export const getRedeCardBalance = async () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('Token não encontrado');

    const { data } = await axios.get(`${BASE_URL}/rede_card_balance`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    });
    return data;
  } catch (error) {
    console.error("Erro ao buscar saldo do RedeCard:", error);
    throw error;
  }
}