import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

export default function Header() {
  return (
    <div>
      <header style={{ textAlign: 'center' }}>
        <nav>
          <ul>
            <li>
              <Link to={ROUTES.Main}>Home</Link>
            </li>
            <li>
              <Link to={ROUTES.DataFetching}>DataFetching</Link>
            </li>
            <li>
              <Link to={ROUTES.DataFetching2}>DataFetching2</Link>
            </li>
            <li>
              <Link to={ROUTES.DataFetching3}>DataFetching3</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
