import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import Footer from './components/Footer';
import About from './pages/About..js';
import Pricing from './pages/Pricing.js';
import { Routes, Route } from 'react-router-dom';
import Features from './pages/Features.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
