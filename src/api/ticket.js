import axios from "axios";
import { BASE_URL } from "./api";

export const getTickets = async () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('Token não encontrado');

    const { data } = await axios.get(`${BASE_URL}/tickets`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    });
    return data;
  } catch (error) {
    console.error('Erro ao buscar tickets:', error);
    throw error;
  }
}

export const deleteTicket = async (id) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('Token não encontrado');

    await axios.delete(`${BASE_URL}/tickets/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    });
    // Não precisa retornar nada, apenas não lançar erro
  } catch (error) {
    // Só mostre erro se realmente for erro de rede ou status >= 400
    if (error.response && (error.response.status === 200 || error.response.status === 204)) {
      // Considera sucesso silencioso
      return;
    }
    console.error('Erro ao excluir ticket:', error);
    throw error;
  }
}

export const getTicket = async (id) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('Token não encontrado');

    const { data } = await axios.get(`${BASE_URL}/tickets/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    });
    return data;
  } catch (error) {
    console.error('Erro ao buscar ticket:', error);
    throw error;
  }
}

export const createTicket = async (ticketData, clientId) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('Token não encontrado');

    // Inclui client_id no corpo do ticket
    const { data } = await axios.post(`${BASE_URL}/tickets`, { ...ticketData, client_id: clientId }, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    });
    return data;
  } catch (error) {
    console.error('Erro ao criar ticket:', error);
    throw error;
  }
}

export const deleteTicketService = async (id, ticketServiceId) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('Token não encontrado');

    const payload = {
      ticket: {
        ticket_services_attributes: [
          {
            id: ticketServiceId,
            _destroy: true
          }
        ]
      }
    };

    const { data } = await axios.put(`${BASE_URL}/tickets/${id}`, payload, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    });

    return data;
  } catch (error) {
    console.error('Erro ao excluir ticket_service:', error);
    throw error;
  }
};
