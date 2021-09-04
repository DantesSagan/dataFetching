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
const UseReducer4 = lazy(() => import('./components/UseReducer4'));
const UseReducer5 = lazy(() => import('./components/UseReducer5'));
const callBackHooks = lazy(() => import('./components/callBackHooks'));
const UseMemo = lazy(() => import('./components/UseMemo'));
const UseRef1 = lazy(() => import('./components/useRefOne'));
const UseRef2 = lazy(() => import('./components/useRef2'));
const UseCustomHooks1 = lazy(() => import('./components/UseCustomHooks1'));
const UseCustomHooks2 = lazy(() => import('./components/UseCustomHooks2'));
const UseInputCustomHook = lazy(() =>
  import('./components/UseInputCustomHook')
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
          <Route path={ROUTES.UseReducer4} component={UseReducer4} />
          <Route path={ROUTES.UseReducer5} component={UseReducer5} />
          <Route
            path={ROUTES.UseContextUseReducer1}
            component={UseContextUseReducer1}
          />
          <Route path={ROUTES.callBackHooks} component={callBackHooks} />
          <Route path={ROUTES.UseMemo} component={UseMemo} />
          <Route path={ROUTES.UseRef1} component={UseRef1} />
          <Route path={ROUTES.UseRef2} component={UseRef2} />
          <Route path={ROUTES.UseCustomHooks1} component={UseCustomHooks1} />
          <Route path={ROUTES.UseCustomHooks2} component={UseCustomHooks2} />
          <Route path={ROUTES.UseInputCustomHook} component={UseInputCustomHook} />
        </Switch>
        <ScrollToTop />
      </Suspense>
    </BrowserRouter>
  );
}
