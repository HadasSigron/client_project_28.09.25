import './App.css'
import BooksList from './components/BooksList'
import { useState } from 'react';
import LoginPanel from './components/LoginPanel';
//
function App() {

  return (
    <>
      <div>
      <h1>Books App</h1>
      <LoginPanel />
      <div style={{ marginTop: 16 }}>
        <BooksList />
      </div>
    </div>
    </>
  )
}

export default App
