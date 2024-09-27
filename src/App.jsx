import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/index.jsx';
import PagHotel from './pages/pagHotel/index.jsx';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotel/:id" element={<PagHotel />} />
      </Routes>
    </div>
  );
}

export default App;
