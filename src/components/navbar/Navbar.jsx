import React, { useState, useEffect } from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const isActive = () =>
    window.scrollY > 0 ? setActive(true) : setActive(false);

  useEffect(() => {
    window.addEventListener('scroll', isActive);

    return () => window.removeEventListener('scroll', isActive);
  }, []);

  const currentUser = {
    id: 1,
    username: 'Anna',
    isSeller: true,
  };

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
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {currentUser ? (
            <div className='user' onClick={() => setOpen(!open)}>
              <img
                className='user__img'
                src='https://images.pexels.com/photos/4006576/pexels-photo-4006576.jpeg'
                alt='User profile'
              />
              <span>{currentUser?.username}</span>
              {open && (
                <div className='options'>
                  {currentUser.isSeller && (
                    <>
                      <Link className='link' to='/mygigs'>
                        Gigs
                      </Link>
                      <Link className='link' to='/add'>
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link className='link' to='/orders'>
                    Orders
                  </Link>
                  <Link className='link' to='/messages'>
                    Messages
                  </Link>
                  <Link className='link' to='/'>
                    Logout
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <>
              <span>Sign in</span>
              <Link className='link' to='/register'>
                <button>Join</button>
              </Link>
            </>
          )}
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
