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
// import Social from '../../components/Social';
// import Ski from '../../components/Ski';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Switch>
        <Redirect exact from="/" to="/home/animations" />
        <Redirect exact from="/home" to="/home/animations" />
        <Route
          exact
          path="/home/:page?"
          render={props => <HomePage {...props} />}
        />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
