import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Films from './components/Films/Films';
import Login from './components/Login/Login';
import PrivateRoute from './components/Hooks/PirvateRoutes';

import AuthContext from './components/Store/auth-context';
import { useContext } from 'react';

import 'antd/dist/antd.css';
import './App.css';
import NotFound from './components/ErrorPage/ErrorPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films" element={<PrivateRoute component={Films} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
