import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PrivateRoute from './components/Hooks/PirvateRoutes';
import Navbar from './components/Navbar/Navbar';
import Loading from './components/Loading/Loading';
const Home = React.lazy(() => import('./components/Home/Home'));
const Films = React.lazy(() => import('./components/Films/Films'));
const Login = React.lazy(() => import('./components/Login/Login'));
const NotFound = React.lazy(() => import('./components/ErrorPage/ErrorPage'));

import 'antd/dist/antd.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/" exact component={Home} />
          <PrivateRoute path="/films" component={Films} />
          <Route path="/login" component={Login} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
