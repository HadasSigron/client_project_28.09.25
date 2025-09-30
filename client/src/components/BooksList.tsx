import { useState } from 'react';
import { getAllBooks } from '../service/books';

export default function BooksList() {
  const [books, setBooks] = useState<any[]>([]);
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const toggleBooks = () => {
    if (!visible) {
      // כשמראים, קודם ננסה להביא מהשרת
      getAllBooks()
        .then((data) => {
          setBooks(data);
          setError(null);
          setVisible(true);
        })
        .catch((e) => {
          setError(e.message || 'Failed to fetch books');
          setBooks([]); // איפוס – לא נציג ספרים
          setVisible(false);
        });
    } else {
      // הסתרה
      setVisible(false);
    }
  };

  return (
    <div>
      <button onClick={toggleBooks}>
        {visible ? 'Hide Books' : 'Show Books'}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {visible && !error && (
        <ul>
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
