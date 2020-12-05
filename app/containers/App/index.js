/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Group from '../../components/Group';
// import Social from '../../components/Social';
// import Ski from '../../components/Ski';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Switch>
        <Redirect exact from="/" to="/animations" />
        <Route exact path="/:page?" render={props => <HomePage {...props} />} />
        <Route exact path="/testi/testi" component={Group} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
