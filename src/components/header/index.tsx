import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Header() {
  return (
    <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
      <h1 className="header text-3xl z-20">Trending Movies</h1>
    </Link>
  );
}

export default Header;
