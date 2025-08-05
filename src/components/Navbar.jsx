import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Portfolio</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">About Me</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/hire-me">Hire Me</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}