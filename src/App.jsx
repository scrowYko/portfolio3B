import Home from './pages/home';
import Sobre from './pages/sobre';
import Linguagens from './pages/linguagens';
import Matematica from './pages/matematica';
import Natureza from './pages/natureza';
import Humanas from './pages/humanas';
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
          <Route path="/matematica" element={<Matematica />} />
          <Route path="/natureza" element={<Natureza />} />
          <Route path="/humanas" element={<Humanas />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
