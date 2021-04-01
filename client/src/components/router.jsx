import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './app';
import Cookbook from './cookbook';

const MyRouter = () => (
  <Router>
    <Switch>
      <Route path="/lazychef/cookbook" component={Cookbook} />
      <Route path="/*" component={App} />
    </Switch>
  </Router>
);

export default MyRouter;
