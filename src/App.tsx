import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useContext } from 'react';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Films from './components/Films/Films';
import Login from './components/Login/Login';
import AuthContext from './components/Store/auth-context';

import 'antd/dist/antd.css';
import './App.css';

function App() {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {isLoggedIn && <Route path="/films" element={<Films />} />}
        {!isLoggedIn && <Route path="/login" element={<Login />} />}
      </Routes>
    </Router>
  );
}

export default App;
