import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Header() {
  return (
    <Link to="/" className='max-w-6xl mx-auto flex justify-between py-3 text-sky-400'>
        <p className="font-bold  text-3xl z-20">Trending Movies</p>
        {/* <p className='font-semibold'>Contact</p> */}
    </Link>
  );
}

export default Header;
