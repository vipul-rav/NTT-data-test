import React, { lazy, Suspense } from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const CoinListScreen = lazy(() => import('../screens/CoinList'));
const CoinDetailsScreen = lazy(() => import('../screens/CoinDetails'));

const history = createBrowserHistory();

const AppRouter = (
  <Router history={history}>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={CoinListScreen} />
        <Route path="/coin-details/:id" component={CoinDetailsScreen} />
      </Switch>
    </Suspense>
  </Router>
);

export { AppRouter, history };
