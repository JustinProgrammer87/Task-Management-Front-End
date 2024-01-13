import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000'
});

instance.interceptors.request.use(config => {
  // authToken is retrieved from localStorage
  const authToken = localStorage.getItem('authToken');
  config.headers.Authorization = authToken ? `Bearer ${authToken}` : '';
  return config;
});

export default instance;

