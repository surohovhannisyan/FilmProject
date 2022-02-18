import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Films from './components/Films/Films';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';

import 'antd/dist/antd.css';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar /> <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films" element={<Films />} />
        <Route path="/login" element={<Login />} />
      </Routes>{' '}
      <br /> <br />
      <Footer />
    </Router>
  );
}

export default App;
