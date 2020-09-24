import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';

import { GlobalStyles } from './globalStyles';
import { Header } from './Header';
import { Dashboard, NotePage } from './pages';

export const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/note" component={NotePage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};
