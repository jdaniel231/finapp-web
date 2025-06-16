import axios from "axios";
import { BASE_URL } from "./api";

export const getAccountPay = async () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('Token não encontrado');

    const { data } = await axios.get(`${BASE_URL}/account_pays`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    });
    return data; // <-- retorne os dados aqui!
  } catch (error) {
    if (error.response && (error.response.status === 200 || error.response.status === 204)) {
      return;
    }
    console.error('Erro ao buscar account_pays:', error);
    throw error;
  }
}

export const createAccountPay = async (accountPayData) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('Token não encontrado');

    const { data } = await axios.post(`${BASE_URL}/account_pays`, accountPayData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    });
    return data;
  } catch (error) {
    console.error('Erro ao criar account_pay:', error);
    throw error;
  }
}

export const updateAccountPay = async (id, accountPayData) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('Token não encontrado');

    const { data } = await axios.put(`${BASE_URL}/account_pays/${id}`, accountPayData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    });
    return data;
  } catch (error) {
    console.error('Erro ao atualizar account_pay:', error);
    throw error;
  }
}
export const deleteAccountPay = async (id) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('Token não encontrado');

    const { data } = await axios.delete(`${BASE_URL}/account_pays/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    });
    return data;
  } catch (error) {
    if (error.response && (error.response.status === 200 || error.response.status === 204)) {
      return;
    }
    console.error('Erro ao excluir account_pay:', error);
    throw error;
  }
}
export const getAccountPayById = async (id) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('Token não encontrado');

    const { data } = await axios.get(`${BASE_URL}/account_pays/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    });
    return data;
  } catch (error) {
    console.error('Erro ao buscar account_pay:', error);
    throw error;
  }
}
export const payAccountPay = async (id, paymentData) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('Token não encontrado');

    const { data } = await axios.post(`${BASE_URL}/account_pays/${id}/register_payment`, paymentData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    });
    return data;
  } catch (error) {
    console.error('Erro ao pagar account_pay:', error);
    throw error;
  }
}

export const cancelAccountPay = async (id, paymentData) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('Token não encontrado');

    const { data } = await axios.post(`${BASE_URL}/account_pays/${id}/cancel_payment`, paymentData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    });
    return data;
  } catch (error) {
    console.error('Erro ao cancelar account_pay:', error);
    throw error;
  }
}