import { useState } from 'react';
import { register } from '../service/auth';

export default function RegisterButton() {
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string>('');

  const handleRegister = () => {
    setBusy(true);
    setMsg('');
    // hard-coded demo user per instructions
    register('newuser', 'pass123')
      .then(() => setMsg('Registered successfully'))
      .catch((e: any) => setMsg(e?.message || 'Register failed'))
      .finally(() => setBusy(false));
  };

  return (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <button onClick={handleRegister} disabled={busy}>
        {busy ? 'Registering…' : 'Register demo user'}
      </button>
      {msg && <span>{msg}</span>}
    </div>
  );
}
