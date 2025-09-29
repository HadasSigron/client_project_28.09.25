import { useState } from 'react';
import { getAllBooks } from '../service/books';
//
export default function BooksList() {
  const [books, setBooks] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  const toggleBooks = () => {
    if (!visible) {
      // show and load
      setLoading(true);
      setError(null);
      getAllBooks()
        .then((data) => {
          setBooks(data);
        })
        .catch((e) => {
          setError(e.message || 'Failed to fetch books');
        })
        .finally(() => {
          setLoading(false);
        });
    }
    setVisible(!visible);
  };

  return (
    <div>

      <button onClick={toggleBooks}>
        {visible ? 'Hide Books' : loading ? 'Loading…' : 'Show Books'}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {visible && (
        <ul style={{ marginTop: 12 }}>
          {books.map((b) => (
            <li key={b.id}>
              {b.title} {b.author && <em>({b.author})</em>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
