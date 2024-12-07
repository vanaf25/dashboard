export const API_URL = 'http://localhost:8080/api';

export const setHeaders = () => {
  const header = {
    headers: {
      'x-auth-token': localStorage.getItem('token'),
    },
  };

  return header;
};
