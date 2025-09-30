import { httpPost } from './http';

const TOKEN_KEY = 'auth_token';

export function getToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

export function login(username: string, password: string): Promise<string> {
  return httpPost('/login', { username, password }).then(({ token }) => {
    localStorage.setItem(TOKEN_KEY, token);
    return token;
  });
}

export function logout(): Promise<void> {
  const token = getToken();
  if (!token) {
    localStorage.removeItem(TOKEN_KEY);
    return Promise.resolve();
  }
  return httpPost('/logout', { token })
    .finally(() => {
      localStorage.removeItem(TOKEN_KEY);
    });
}

export function register(username: string, password: string): Promise<void> {
  return httpPost('/register', { username, password }).then(() => undefined);
}
