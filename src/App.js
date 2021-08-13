import { lazy, Suspense } from 'react';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as ROUTES from '../src/constants/routes';
import Loader from './pages/loader';

import './index.css';

const Header = lazy(() => import('./components/header'));
const Main = lazy(() => import('./main'));
const DataFetching = lazy(() => import('./components/DataFetching'));
const DataFetching2 = lazy(() => import('./components/DataFetching2'));
const DataFetching3 = lazy(() => import('./components/DataFetching3'));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Main />
        <Header />
        <Switch>
          <Route path={ROUTES.DataFetching} component={DataFetching} />
          <Route path={ROUTES.DataFetching2} component={DataFetching2} />
          <Route path={ROUTES.DataFetching3} component={DataFetching3} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
