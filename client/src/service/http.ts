import axios, { type AxiosRequestConfig } from 'axios';

const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const httpGet = (url: string, config?: AxiosRequestConfig) => {
  return http
    .get(url, config)
    .then(res => res.data)
    .catch(err => { throw err?.response?.data || err; });
};

export const httpPost = (url: string, body: any, config?: AxiosRequestConfig) => {
  return http
    .post(url, body, config)
    .then(res => res.data)
    .catch(err => { throw err?.response?.data || err; });
};
