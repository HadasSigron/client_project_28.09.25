import './App.css'
import BooksList from './components/BooksList'
import { useState } from 'react';

function App() {
   const [showList, setShowList] = useState(false);

  return (
    <>
      <h1>Books App</h1>
      <button onClick={() => setShowList(true)}>Show Books List</button>

      {showList && <BooksList />}
    </>
  )
}

export default App
