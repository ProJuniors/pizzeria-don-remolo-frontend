import axios from 'axios';
import { getEnvVariables } from '../utils/getEnvVariables';

const { VITE_PIZZERIA_API_URL, VITE_PIZZERIA_TOKEN } = getEnvVariables();

const pizzeriaApi = axios.create({
  baseURL: VITE_PIZZERIA_API_URL,
});

pizzeriaApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: VITE_PIZZERIA_TOKEN,
  };
  return config;
});

export default pizzeriaApi;
