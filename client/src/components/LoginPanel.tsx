import { useState } from 'react';
import { login, getToken } from '../service/auth';

export default function LoginPanel() {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(getToken());

  const handleLogin = () => {
    setBusy(true);
    setError(null);

    login('hadas', '1234')
      .then((t) => {
        setToken(t);
      })
      .catch((e: any) => {
        setError(e?.message || 'Login failed');
      })
      .finally(() => {
        setBusy(false);
      });
  };

  return (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      {!token ? (
        <button onClick={handleLogin} disabled={busy}>
          {busy ? 'Logging in…' : 'Login (hadas/1234)'}
        </button>
      ) : (
        <span style={{ fontSize: 12 }}>Token: {token}</span>
      )}
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
}
