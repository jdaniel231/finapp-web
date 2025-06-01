import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/users/sign_in`, {
      user: { email, password }
    });

    const token = response.headers.authorization; // já vem com "Bearer ..."
    return { token, data: response.data }; 
  } catch (error) {
    console.error('Login failed:', error.response?.data || error.message);
    throw error;
  }
};

export const logout = async () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('No token found');

    const response = await axios.delete(`${API_URL}/users/sign_out`, {
      headers: {
        Authorization: token // não adicione outro "Bearer"
      }
    });

    localStorage.removeItem('token');
    return response.data;
  } catch (error) {
    console.error('Logout failed:', error.response?.data || error.message);
    throw error;
  }
};
