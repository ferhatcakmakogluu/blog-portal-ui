import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from './Auth';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [showAuth, setShowAuth] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = localStorage.getItem('user');

  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.reload();
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            BLOG PORTALI
          </Link>

          <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Anasayfa
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/galeri" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Galeri
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/hakkimizda" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Hakkımızda
              </Link>
            </li>
            <li className="nav-item">
              {user ? (
                <button onClick={handleLogout} className="nav-link auth-btn">
                  Çıkış Yap ({user})
                </button>
              ) : (
                <button onClick={() => setShowAuth(true)} className="nav-link auth-btn">
                  Giriş Yap
                </button>
              )}
            </li>
          </ul>
        </div>
      </nav>

      {showAuth && <Auth onClose={() => setShowAuth(false)} />}
    </>
  );
};

export default Navbar; 