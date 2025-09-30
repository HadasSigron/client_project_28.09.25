import { httpGet, httpPost } from './http';
import { getToken } from './auth';


export const getAllBooks = () =>{
      const token = getToken();
    return httpGet('/items', token ? {
    headers: { Authorization: `Bearer ${token}` }
  } : undefined);
}

export const createBook = (book: any) => {
  const token = getToken();
  return httpPost(
    '/items',
    book,
    token ? { headers: { Authorization: `Bearer ${token}` } } : undefined
  );
};


  
