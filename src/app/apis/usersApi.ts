import axios from 'axios';
/*
import { API_URL, setHeaders } from './config';

export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`, setHeaders());
    if (response.status === 200) {
      return response.data;
    }
    return 'Error';
  } catch (err) {
    console.error(err);
  }
};

export const updateUser = async (status, id) => {
  try {
    const response = await axios.patch(`${API_URL}/users/${id}`, { status }, setHeaders());
    if (response.status === 200) {
      return response.data;
    }
    return 'Error';
  } catch (err) {
    console.error(err);
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/users/${id}`, setHeaders());
    if (response.status === 200) {
      return response.data;
    }
    return 'Error';
  } catch (err) {
    console.error(err);
  }
};
*/

export const fetchCustomers = async () => {
    try {
        const { data } = await axios.get('/api/leads/getLeads');
        return data.customers;
    } catch (error) {
        throw new Error('Failed to fetch customers');
    }
};
