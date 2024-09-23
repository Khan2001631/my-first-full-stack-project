import Header from './components/header/header'
import Footer from './components/footer/footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import './App.css'
import Login from './pages/login/login'

function App() {

  return (
    <>
     <Router> {/* Wrap everything inside BrowserRouter */}
      <Header />
      <Routes>
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
