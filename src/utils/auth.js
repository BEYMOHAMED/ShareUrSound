import axios from 'axios';
import { baseURL } from '@/utils/api';

const TOKEN_STORAGE_KEY = 'access_token';

export default {
  register({
    firstname, lastname, email, password,
  }) {
    const formData = new URLSearchParams();
    formData.append('firstname', firstname);
    formData.append('lastname', lastname);
    formData.append('username', email);
    formData.append('password', password);

    return axios.post(`${baseURL}/api/register`, formData)
      .then(({ data }) => {
        // eslint-disable-next-line no-undef
        console.log('ok');
        return data;
      }).catch((error) => {
        console.log(error);
      });
  },

  login({ email, password }) {
    const formData = new URLSearchParams();
    formData.append('username', email);
    formData.append('password', password);

    return axios.post(`${baseURL}/api/login_check`, formData)
      .then(({ data }) => {
        localStorage.setItem(TOKEN_STORAGE_KEY, data.token);
        console.log(data);
        // eslint-disable-next-line no-undef
        return data;
      });
  },
};
