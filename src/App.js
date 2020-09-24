import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';

import { Dashboard, NotePage } from './pages';

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/note" component={NotePage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};
