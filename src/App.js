import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as ROUTES from '../src/constants/routes';
import Loader from './pages/loader';

import './index.css';
import ScrollToTop from './pages/scrollTop';

const Header = lazy(() => import('./components/header'));
const Main = lazy(() => import('./main'));
const DataFetching = lazy(() => import('./components/DataFetching'));
const DataFetching2 = lazy(() => import('./components/DataFetching2'));
const DataFetching3 = lazy(() => import('./components/DataFetching3'));
const useContext1 = lazy(() => import('./components/useContext1'));
const useContext2 = lazy(() => import('./components/useContext2'));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Header />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path={ROUTES.DataFetching} component={DataFetching} />
          <Route path={ROUTES.DataFetching2} component={DataFetching2} />
          <Route path={ROUTES.DataFetching3} component={DataFetching3} />
          <Route path={ROUTES.useContext1} component={useContext1} />
          <Route path={ROUTES.useContext2} component={useContext2} />
        </Switch>
        <ScrollToTop />
      </Suspense>
    </BrowserRouter>
  );
}
