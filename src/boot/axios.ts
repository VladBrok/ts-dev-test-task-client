import { boot } from 'quasar/wrappers';
import axios, { AxiosInstance } from 'axios';
import { getToken, setToken } from 'src/lib/token';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
  }
}

const api = axios.create({
  baseURL: 'https://motionless-zipper-fish.cyclic.app',
});

api.interceptors.request.use((config) => {
  return { ...config, headers: { Authorization: `Bearer ${getToken()}` } };
});

api.interceptors.response.use((response) => {
  const token = response.data.access_token;
  if (token) {
    setToken(token);
  }
  return response;
});

export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$api = api;
});

export { api };
