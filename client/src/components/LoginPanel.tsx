import { useState } from 'react';
import { login, getToken, logout } from '../service/auth';

export default function LoginPanel() {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(getToken());

  const handleLogin = () => {
    setBusy(true);
    setError(null);

    login('hadas', '1234')
      .then((t) => setToken(t))
      .catch((e: any) => setError(e?.message || 'Login failed'))
      .finally(() => setBusy(false));
  };

  const handleLogout = () => {
    setBusy(true);
    setError(null);

    logout()
      .then(() => setToken(null))
      .catch((e: any) => setError(e?.message || 'Logout failed'))
      .finally(() => setBusy(false));
  };

  return (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      {!token ? (
        <button onClick={handleLogin} disabled={busy}>
          {busy ? 'Logging in…' : 'Login (hadas/1234)'}
        </button>
      ) : (
        <>
          <span style={{ fontSize: 12 }}>Token: {token}</span>
          <button onClick={handleLogout} disabled={busy}>
            {busy ? 'Logging out…' : 'Logout'}
          </button>
        </>
      )}
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
}
