import { boot } from 'quasar/wrappers';
import axios, { AxiosInstance } from 'axios';
import { getToken, removeToken, setToken } from 'src/lib/token';
import Router from '../router';
import { Notify } from 'quasar';

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

const handleUnauthorized = () => {
  if (['/log-in', '/'].indexOf(Router.currentRoute.value.fullPath) !== -1) {
    return;
  }

  if (getToken()) {
    removeToken();
    Notify.create({
      type: 'info',
      color: 'primary',
      message: 'Время сеанса истекло. Пожалуйста, войдите снова',
    });
  }
  Router.push('/log-in');
};

api.interceptors.response.use(
  (response) => {
    const token = response.data.access_token;
    if (token) {
      setToken(token);
    }
    return response;
  },
  (err) => {
    if (err.response.status === 401) {
      handleUnauthorized();
    }
    throw err;
  }
);

export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$api = api;
});

export { api };
