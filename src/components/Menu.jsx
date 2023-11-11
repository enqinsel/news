import { Link, useLocation } from 'react-router-dom';

function Menu() {
  const location = useLocation();

  return (
    <ul className="flex gap-8 container mx-auto">
      <li>
        <Link
          to="/"
          className={`uppercase text-base tracking-wider font-mono ${location.pathname === '/' ? 'text-gray-400' : ''}`}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          className={`uppercase text-base tracking-wider font-mono ${location.pathname === '/about' ? 'text-gray-400' : ''}`}
        >
          About
        </Link>
      </li>
    </ul>
  );
}

export default Menu;
