import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

export default function Header() {
  return (
    <div>
      <header className='mt-14'>
        <nav className='grid grid-cols-4 rounded-t-lg p-2 border-4 border-green-900 shadow-inner font-mono gridCol '>
          <div className='border border-green-700 rounded-2xl'>
            <div className='button p-4 border border-green-800 rounded-2xl'>
              <Link to='/'>Home</Link>
            </div>
            <div className='button p-2'>
              <Link to={ROUTES.DataFetching}>useEffect#1</Link>
            </div>
            <div className='button p-2'>
              <Link to={ROUTES.DataFetching2}>useEffect#2</Link>
            </div>
            <div className='button p-2'>
              <Link to={ROUTES.DataFetching3}>useEffect#3</Link>
            </div>
          </div>
          <div className='border border-green-700 rounded-2xl'>
            <div className='button p-2'>
              <Link to={ROUTES.useContext1}>useContext#1</Link>
            </div>
            <div className='button p-2'>
              <Link to={ROUTES.useContext2}>useContext#2</Link>
            </div>
            <div className='button p-2'>
              <Link to={ROUTES.UseContextUseReducer1}>
                useContext UseReducer#1
              </Link>
            </div>
          </div>
          <div className='border border-green-700 rounded-2xl'>
            <div className='button p-2'>
              <Link to={ROUTES.UseReducer}>useReducer#1</Link>
            </div>
            <div className='button p-2'>
              <Link to={ROUTES.UseReducer2}>useReducer#2</Link>
            </div>
            <div className='button p-2'>
              <Link to={ROUTES.UseReducer3}>useReducer#3</Link>
            </div>
            <div className='button p-2'>
              <Link to={ROUTES.UseReducer4}>useReducer#4</Link>
            </div>
            <div className='button p-2'>
              <Link to={ROUTES.UseReducer5}>useReducer#5</Link>
            </div>
          </div>
          <div className='border border-green-700 rounded-2xl'>
            <div className='button p-2'>
              <Link to={ROUTES.callBackHooks}>callBackHooks#1</Link>
            </div>
            <div className='button p-2'>
              <Link to={ROUTES.UseMemo}>useMemo</Link>
            </div>
            <div className='button p-2'>
              <Link to={ROUTES.UseRef1}>useRef#1</Link>
            </div>
            <div className='button p-2'>
              <Link to={ROUTES.UseRef2}>useRef#2</Link>
            </div>
          </div>
        </nav>
        <nav className='mt-2 grid-flow-col grid rounded-b-lg p-2 border-4 border-green-900 shadow-inner font-mono gridCol '>
          <div className='border border-green-700 rounded-2xl'>
            <div className='button p-2'>
              <Link to={ROUTES.UseCustomHooks1}>useCustomHooks#1</Link>
            </div>
            <div className='button p-2'>
              <Link to={ROUTES.UseCustomHooks2}>useCustomHooks#2</Link>
            </div>
            <div className='button p-2'>
              <Link to={ROUTES.UseInputCustomHook}>useCustomHooks#3</Link>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
