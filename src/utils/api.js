import axios from 'axios';

export const baseURL = 'https://api.shareyoursound.loscil.fr';

const instance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${localStorage.getItem('access_token')}`,
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = `Bearer ${localStorage.getItem('access_token')}`;
    if (token) {
      // eslint-disable-next-line no-param-reassign
      config.headers.common.Authorization = token;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export default instance;
