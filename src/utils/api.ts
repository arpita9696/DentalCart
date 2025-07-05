// utils/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://apis.dentalkart.com/', // Root base
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'x-api-key': 'ZFobrRyccnTyXyXHPUVO4eyyKEKoSjWB',
    'user-agent': 'ios',
    platform: 'ios',
    version: '13.0.2',
    app_version: '12.4.9',
    device_id: '3058D2C5-A13A-4B85-B131-CC6E83BDD302',
  },
});

// Request interceptor to set dynamic baseURL and token if needed
api.interceptors.request.use(
  async config => {
    if (config.url?.startsWith('/customer')) {
      config.baseURL = 'https://apis.dentalkart.com/customer/api/v1';
    } else if (config.url?.startsWith('/node_svlss')) {
      config.baseURL = 'https://apis.dentalkart.com/node_svlss/api/v1';
    }

    // Authorization header is already set in request
    return config;
  },
  error => Promise.reject(error),
);
export default api;
