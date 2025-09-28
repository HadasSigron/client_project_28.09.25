import { useEffect, useState } from 'react';
import { getAllBooks } from '../service/books';

export default function BooksList() {
  const [books, setBooks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]   = useState<string | null>(null);

  useEffect(() => {
    getAllBooks()
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message || 'Failed to fetch books');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading…</p>;
  if (error)   return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <h1>Books</h1>
      <ul>
        {books.map((b) => (
          <li key={b.id}>
            {b.title} {b.author && <em>({b.author})</em>}
          </li>
        ))}
      </ul>
    </div>
  );
}
