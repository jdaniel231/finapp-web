import axios from 'axios';
import { API_URL } from './api';

export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/users/sign_in`, {
    user: { email, password }
  });
  const token = response.headers.authorization;
  return { token, data: response.data };
};

export const logout = async () => {
  const token = localStorage.getItem('token');
  const response = await axios.delete(`${API_URL}/users/sign_out`, {
    headers: { Authorization: token }
  });
  localStorage.removeItem('token');
  return response.data;
};
