import axios from "axios";
import { BASE_URL } from "./api";

export const getServices = async () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('Token não encontrado');

    const { data } = await axios.get(`${BASE_URL}/services`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    });
    return data;
  } catch (error) {
    console.error('Erro ao buscar serviços:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
}

export const createService = async (serviceData) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('Token não encontrado');

    const { data } = await axios.post(`${BASE_URL}/services`, serviceData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    });
    return data;
  } catch (error) {
    console.error('Erro ao criar serviço:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
}

export const updateService = async (id, serviceData) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('Token não encontrado');

    const { data } = await axios.put(`${BASE_URL}/services/${id}`, serviceData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    });
    return data;
  } catch (error) {
    console.error('Erro ao atualizar serviço:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
}

export const deleteService = async (id) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('Token não encontrado');

    await axios.delete(`${BASE_URL}/services/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    });
  } catch (error) {
    console.error('Erro ao excluir serviço:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
}

export const getService = async (id) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('Token não encontrado');

    const { data } = await axios.get(`${BASE_URL}/services/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    });
    return data;
  } catch (error) {
    console.error('Erro ao buscar serviço:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
}