import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './components/calculator';
import Home from './components/home';
import Navbar from './components/navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Calculator" element={<Calculator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
