import axios from 'axios';
import { BASE_URL } from './api';


export const getClients = async () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('Token não encontrado');

    const  {data} = await axios.get(`${BASE_URL}/clients`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    });
    return data;
  }
  catch (error) {
    console.error('Erro ao buscar clientes:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
};

export const deleteClient = async (id) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('Token não encontrado');

    await axios.delete(`${BASE_URL}/clients/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    });
  } catch (error) {
    console.error('Erro ao excluir cliente:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
}

export const createClient = async (clientData) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('Token não encontrado');

    const { data } = await axios.post(`${BASE_URL}/clients`, clientData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    });
    return data;
  } catch (error) {
    console.error('Erro ao criar cliente:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
};

export const updateClient = async (id, clientData) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('Token não encontrado');

    const { data } = await axios.put(`${BASE_URL}/clients/${id}`, clientData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    });
    return data;
  } catch (error) {
    console.error('Erro ao atualizar cliente:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
};

export const getClient = async (id) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('Token não encontrado');

    const { data } = await axios.get(`${BASE_URL}/clients/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    });
    return data;
  } catch (error) {
    console.error('Erro ao buscar cliente:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
};

export const getTicketsClient = async (clientId) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('Token não encontrado');

    const { data } = await axios.get(`${BASE_URL}/tickets?client_id=${clientId}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    });
    return data;
  } catch (error) {
    console.error('Erro ao buscar tickets:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
};