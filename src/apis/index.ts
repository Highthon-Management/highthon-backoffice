import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://~~',
  timeout: 10000, // 10초
});

instance.interceptors.request.use((config) => {
  // TODO: 토큰 재발급 처리
  return config;
});
