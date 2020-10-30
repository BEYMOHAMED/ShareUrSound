import axios from 'axios';
import { baseURL } from '@/utils/api';

export default {
  myInfo() {
    axios.get(`${baseURL}/api/user`).then(({ data }) => {
      console.log(data);
      return data;
    });
  },

  getUsersInfo(id) {
    axios.get(`${baseURL}/api/user/${id}`).then(({ data }) => {
      console.log(data);
      return data;
    });
  },

  geMyFollows() {
    axios.get(`${baseURL}/api/user/follow`).then(({ data }) => {
      console.log(data);
      return data;
    });
  },

  getUsersFollows(id) {
    axios.get(`${baseURL}/api/user/follow/${id}`).then(({ data }) => {
      console.log(data);
      return data;
    });
  },

  getMyFollowers() {
    axios.get(`${baseURL}/api/user/followers`).then(({ data }) => {
      console.log(data);
      return data;
    });
  },

  getUsersFollowers(id) {
    axios.get(`${baseURL}/api/user/followers/${id}`).then(({ data }) => {
      console.log(data);
      return data;
    });
  },

  getTypes() {
    axios.get(`${baseURL}/api/type`).then(({ data }) => {
      console.log(data);
      return data;
    });
  },

  getTypeById(id) {
    axios.get(`${baseURL}/api/type/${id}`).then(({ data }) => {
      console.log(data);
      return data;
    });
  },

  getMedia() {
    axios.get(`${baseURL}/api/media`).then(({ data }) => {
      console.log(data);
      return data;
    });
  },

  getMedium(id) {
    axios.get(`${baseURL}/api/media/${id}`).then(({ data }) => {
      console.log(data);
      return data;
    });
  },

  getByType(id) {
    axios.get(`${baseURL}/api/media/type/${id}`).then(({ data }) => {
      console.log(data);
      return data;
    });
  },
};
