import React, { useState, useEffect } from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [active, setActive] = useState(false);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', isActive);

    return () => {
      window.removeEventListener('scroll', isActive);
    };
  }, []);

  return (
    <nav className={active ? 'navbar active' : 'navbar'}>
      <div className='container'>
        <div className='logo'>
          <Link to='/'>
            <span className='text'>Flybeer</span>
          </Link>
          <span className='dot'>.</span>
        </div>
        <div className='navlinks'>
          <p>Flybeer Business</p>
          <p>Explore</p>
          <p>English</p>
          <p>Sign in</p>
          <p>Become a Seller</p>
          <button>Join</button>
        </div>
      </div>
      {active && (
        <>
          <hr />
          <div className='menu'>
            <span>Lorem.</span>
            <span>sit amet.</span>
            <span>amet.</span>
            <span>amet.</span>
            <span>amet.</span>
            <span>amet.</span>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
