import axios from "axios";
/*export const API_URL = 'http://localhost:8080/api';

export const setHeaders = () => {
  const header = {
    headers: {
      'x-auth-token': localStorage.getItem('token'),
    },
  };

  return header;
};*/
const axiosInstance = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;