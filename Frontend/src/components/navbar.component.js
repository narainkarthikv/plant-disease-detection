import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav>
      <a href="http://localhost:3000/" className="navbar-brand">
        Plant-Doc
      </a>
      <div>
        <ul>
          <li>
            <a href="/knowledge" className="nav-link">
              Knowledge
            </a>
          </li>
          <li>
            <a href="/contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
