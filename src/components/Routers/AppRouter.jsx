import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Login from '../login/Login';
import { Home } from '../Home';
import ProtectedRoute from './ProtectedRoute';


export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path='/' component={Home} />
      </Switch>
    </Router>
  );
};
