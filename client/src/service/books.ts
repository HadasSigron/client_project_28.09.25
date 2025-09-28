import { httpGet, httpPost } from './http';

export const getAllBooks = () => httpGet('/items');

export const createBook = (book: any) => httpPost('/items', book);
