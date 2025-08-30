import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <span className="logo-text">DevPortfolio</span>
        </Link>
        
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li><a href="/#home" className="nav-link" onClick={() => setIsMenuOpen(!isMenuOpen)}>Home</a></li>
            <li><Link to='/About' className="nav-link" onClick={() => setIsMenuOpen(!isMenuOpen)}>About</Link></li>
            <li><a href="/#projects" className="nav-link" onClick={() => setIsMenuOpen(!isMenuOpen)}>Projects</a></li>
            <li><a href="/#skills" className="nav-link" onClick={() => setIsMenuOpen(!isMenuOpen)}>Skills</a></li>
            <li><a href="/#blog" className="nav-link" onClick={() => setIsMenuOpen(!isMenuOpen)}>Blog</a></li>
            <li><a href="/#contact" className="nav-link" onClick={() => setIsMenuOpen(!isMenuOpen)}>Contact</a></li>
          </ul>
        </nav>
        
        <div className="header-actions">
          <ThemeToggle />
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`menu-icon ${isMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;