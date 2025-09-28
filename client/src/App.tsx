import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BooksList from './components/BooksList'

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <BooksList></BooksList>
      </div>
    </>
  )
}

export default App
