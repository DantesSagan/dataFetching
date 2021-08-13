import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

export default function Header() {
  return (
    <div>
      <header
        className='mt-14'
        style={{
          textAlign: 'center',
          marginRight: '400px',
          marginLeft: '400px',
        }}
      >
        <nav className='space-x-4 rounded-t-lg p-8  border-4 border-green-900 shadow-inner font-mono text-3xl'>
          <div className='inline-block border-r-2 border-green-600 button'>
            <Link to='/'>Home</Link>
          </div>
          <div className='inline-block border-r-2 border-green-600 button'>
            <Link to={ROUTES.DataFetching}>DataFetching</Link>
          </div>
          <div className='inline-block border-r-2 border-green-600 button'>
            <Link to={ROUTES.DataFetching2}>DataFetching2</Link>
          </div>
          <div className='inline-block border-r-2 border-green-600 button'>
            <Link to={ROUTES.DataFetching3}>DataFetching3</Link>
          </div>
        </nav>
      </header>
    </div>
  );
}
