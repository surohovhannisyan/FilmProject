import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PrivateRoute from './shared/PrivateRoutes/PirvateRoutes';
import Navbar from './shared/Navbar/Navbar';
import Loading from './shared/Loading/Loading';
const Home = React.lazy(() => import('./components/pages/HomePage/Home'));
const Movies = React.lazy(() => import('./components/pages/MoviesPage/Movies'));
const Login = React.lazy(() => import('./components/pages/LoginPage/Login'));
const NotFound = React.lazy(() => import('./shared/ErrorPage/ErrorPage'));

import 'antd/dist/antd.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/" exact component={Home} />
          <PrivateRoute path="/movies" component={Movies} />
          <Route path="/login" component={Login} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
