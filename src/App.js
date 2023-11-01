
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { Routes, Route, Link } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { Home } from './pages/Home'
import { Portfolio } from './pages/Portfolio'
import { Contact } from './pages/Contact'
import { NotFound } from './pages/NotFound'


function App() {

  return (
    <div className="App">

    <Navigation />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='portfolio' element={<Portfolio />} />
        <Route path='contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
