import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='text-center'>
      <Link className='ml-3 text-2xl' to='/'>Home</Link>
      <Link className='ml-3 text-2xl' to='review'>Review</Link>
      <Link className='ml-3 text-2xl' to='/about'>About</Link>
      <Link className='ml-3 text-2xl' to='/contact'>Contact</Link>
    </nav>
  );
};

export default Header;