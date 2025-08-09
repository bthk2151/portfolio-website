import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/">bthk2151.dev</Link>

        <button
          className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/experience">Experience</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/hire">Hire Me</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}