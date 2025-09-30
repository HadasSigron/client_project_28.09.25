import './App.css'
import BooksList from './components/BooksList'
import LoginPanel from './components/LoginPanel';
import RegisterButton from './components/RegisterButton';
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
      <RegisterButton />
    </div>
    </>
  )
}

export default App
