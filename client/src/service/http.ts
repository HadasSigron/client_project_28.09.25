// src/http.ts
import axios from 'axios';

// Create a single axios instance with baseURL from environment
const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// GET request helper
export const httpGet = (url: string) => {
  return http
    .get(url)
    .then(res => res.data)
    .catch(err => {
      // Throw server response if available, otherwise the raw error
      throw err?.response?.data || err;
    });
};

// POST request helper
export const httpPost = (url: string, body: any) => {
  return http
    .post(url, body)
    .then(res => res.data)
    .catch(err => {
      // Throw server response if available, otherwise the raw error
      throw err?.response?.data || err;
    });
};
