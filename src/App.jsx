import Home from './pages/home';
import Sobre from './pages/sobre';
import Linguagens from './pages/linguagens';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/linguagens" element={<Linguagens />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
