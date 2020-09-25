import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";

import { GlobalStyles } from "./globalStyles";
import { Header } from "./Header";
import { Dashboard, NewNotePage, NotePage } from "./pages";

export const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/note/new" component={NewNotePage} />
        <Route path="/note/:id" component={NotePage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};
