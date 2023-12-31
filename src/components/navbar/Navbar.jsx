import React, { useState, useEffect } from 'react';
import './navbar.scss';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

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
    <nav className={active || pathname !== '/' ? 'navbar active' : 'navbar'}>
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
      {(active || pathname !== '/') && (
        <>
          <hr />
          <div className='menu'>
            <Link className='link menuLink' to='/'>
              Graphics & Design
            </Link>
            <Link className='link menuLink' to='/'>
              Video & Animation
            </Link>
            <Link className='link menuLink' to='/'>
              Writing & Translation
            </Link>
            <Link className='link menuLink' to='/'>
              AI Services
            </Link>
            <Link className='link menuLink' to='/'>
              Digital Marketing
            </Link>
            <Link className='link menuLink' to='/'>
              Music & Audio
            </Link>
            <Link className='link menuLink' to='/'>
              Programming & Tech
            </Link>
            <Link className='link menuLink' to='/'>
              Business
            </Link>
            <Link className='link menuLink' to='/'>
              Lifestyle
            </Link>
          </div>
          <hr />
        </>
      )}
    </nav>
  );
};

export default Navbar;
