import { httpPost } from './http';

const TOKEN_KEY = 'auth_token';

export async function login(username: string, password: string): Promise<string> {
  const { token } = await httpPost('/login', { username, password });
  localStorage.setItem(TOKEN_KEY, token);
  return token;
}

export function getToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}
