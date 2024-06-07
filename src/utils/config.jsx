import axios from 'axios';
import { BASE_API } from './constants';

const httpStore = axios.create({
  baseURL: BASE_API,
});

httpStore.interceptors.request.use(
  (req) => {
    return req;
  },
  (error) => {
    return Promise.reject(error);
  },
);

httpStore.interceptors.response.use(
  (res) => res,
  (error) => {
    return Promise.reject(error);
  },
);

export default httpStore;
