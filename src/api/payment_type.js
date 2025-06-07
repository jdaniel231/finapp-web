import axios from "axios";
import { BASE_URL } from "./api";

export const getPaymentTypes = async () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('Token não encontrado');

    const { data } = await axios.get(`${BASE_URL}/payment_types`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    });
    return data;
  } catch (error) {
    console.error('Erro ao buscar tipo de pagamento:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
}

export const createPaymentType = async (paymentTypeData) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('Token não encontrado');

    const { data } = await axios.post(`${BASE_URL}/payment_types`, paymentTypeData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    });
    return data;
  } catch (error) {
    console.error('Erro ao criar tipo de pagamento:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
}
export const updatePaymentType = async (id, paymentTypeData) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('Token não encontrado');

    const { data } = await axios.put(`${BASE_URL}/payment_types/${id}`, paymentTypeData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    });
    return data;
  } catch (error) {
    console.error('Erro ao atualizar tipo de pagamento:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
}
export const deletePaymentType = async (id) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('Token não encontrado');

    const { data } = await axios.delete(`${BASE_URL}/payment_types/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    });
    return data;
  } catch (error) {
    console.error('Erro ao deletar tipo de pagamento:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
}

export const getPaymentType = async (id) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('Token não encontrado');

    const { data } = await axios.get(`${BASE_URL}/payment_types/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    });
    return data;
  } catch (error) {
    console.error('Erro ao buscar tipo de pagamento por ID:', error);
    throw error;
  }
}
