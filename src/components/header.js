import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

export default function Header() {
  return (
    <div>
      <header className='mt-14'>
        <nav className='grid grid-cols-3 rounded-t-lg p-4  border-4 border-green-900 shadow-inner font-mono text-3xl gridCol'>
          <div className='button p-2'>
            <Link to='/'>Home</Link>
          </div>
          <div className=''>
            <div className='button p-2'>
              <Link to={ROUTES.DataFetching}>useEffect1</Link>
            </div>
            <div className='button p-2'>
              <Link to={ROUTES.DataFetching2}>useEffect2</Link>
            </div>
            <div className='button p-2'>
              <Link to={ROUTES.DataFetching3}>useEffect3</Link>
            </div>
          </div>
          <div>
            <div className='button p-2'>
              <Link to={ROUTES.useContext1}>useContext#1</Link>
            </div>
            <div className='button p-2'>
              <Link to={ROUTES.useContext2}>useContext#2</Link>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
