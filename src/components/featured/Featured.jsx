import React from 'react';
import './featured.scss';
import { man, search } from '../../assets';

const Featured = () => {
  return (
    <div className='featured'>
      <div className='container'>
        <div className='left'>
          <h1>
            Flybeer - A perfect place for your <i>business</i> with various
            services offered worldwide
          </h1>
          <div className='search'>
            <div className='searchInput'>
              <img src={search} alt='search icon' />
              <input type='text' placeholder='Try "web development"' />
            </div>
            <button>Search</button>
          </div>
          <div className='popular'>
            <span>Popular search:</span>
            <button>Web design</button>
            <button>Logo design</button>
            <button>Cyber security</button>
            <button>Cloud computing</button>
          </div>
        </div>
        <div className='right'>
          <img src={man} alt='Man from pexel image' />
        </div>
      </div>
    </div>
  );
};

export default Featured;
