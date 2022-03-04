import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Films from './components/Films/Films';
import Login from './components/Login/Login';
import PrivateRoute from './components/Hooks/PirvateRoutes';
import NotFound from './components/ErrorPage/ErrorPage';

import 'antd/dist/antd.css';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <PrivateRoute path="/films" component={Films} />
        <Route path="/login" component={Login} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
