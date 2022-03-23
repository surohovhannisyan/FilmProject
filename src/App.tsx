import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PrivateRoute from './shared/PrivateRoutes/PirvateRoutes';
import Navbar from './shared/Navbar/Navbar';
import Loading from './shared/Loading/Loading';
const Home = React.lazy(() => import('./components/pages/Home/Home'));
const Films = React.lazy(() => import('./components/pages/Films/Films'));
const Login = React.lazy(() => import('./components/pages/Login/Login'));
const NotFound = React.lazy(() => import('./shared/ErrorPage/ErrorPage'));

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
