import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as ROUTES from '../src/constants/routes';

import Loader from './pages/loader';
import ScrollToTop from './pages/scrollTop';

import './index.css';

const Header = lazy(() => import('./components/header'));
const Main = lazy(() => import('./main'));
const DataFetching = lazy(() => import('./components/DataFetching'));
const DataFetching2 = lazy(() => import('./components/DataFetching2'));
const DataFetching3 = lazy(() => import('./components/DataFetching3'));
const useContext1 = lazy(() => import('./components/useContext1'));
const useContext2 = lazy(() => import('./components/useContext2'));
const UseReducer = lazy(() => import('./components/UseReducer'));
const UseReducer2 = lazy(() => import('./components/UseReducer2'));
const UseReducer3 = lazy(() => import('./components/UseReducer3'));
const UseContextUseReducer1 = lazy(() =>
  import('./components/UseContextUseReducer1')
);

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
          <Route path={ROUTES.UseReducer} component={UseReducer} />
          <Route path={ROUTES.UseReducer2} component={UseReducer2} />
          <Route path={ROUTES.UseReducer3} component={UseReducer3} />
          <Route
            path={ROUTES.UseContextUseReducer1}
            // render={(props) => {
            //   <Suspense fallback={<Loader />}>
            //     <UseContextUseReducer1 {...props} />
            //   </Suspense>;
            // }}
            component={UseContextUseReducer1}
          />
          <UseContextUseReducer1 />
        </Switch>
        <ScrollToTop />
      </Suspense>
    </BrowserRouter>
  );
}
