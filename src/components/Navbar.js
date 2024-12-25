import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          BLOG PORTALI
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Anasayfa</Link>
          </li>
          <li className="nav-item">
            <Link to="/haberler" className="nav-link">Haberler</Link>
          </li>
          <li className="nav-item">
            <Link to="/galeri" className="nav-link">Galeri</Link>
          </li>
          <li className="nav-item">
            <Link to="/hakkimizda" className="nav-link">Hakkımızda</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar; 