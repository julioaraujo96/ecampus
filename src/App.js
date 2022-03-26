import React from 'react'
import {BrowserRouter as Router, Routes, Route}  from 'react-router-dom'
import Anuncios from './pages/Anuncios'
import Home from './pages/Home'
import Login from './pages/Login/Login'

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/anuncios" element={<Anuncios />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;