import React from 'react';
import './home.scss';
import Featured from '../../components/featured/Featured';
import TrustedBy from '../../components/trustedBy/TrustedBy';
import Slide from '../../components/slide/Slide';
import { cards } from '../../data';
import CategoryCard from '../../components/categoriesGigs/CategoryCard';
import { check } from '../../assets';

const Home = () => {
  return (
    <div className='home'>
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={4} arrowsScroll={4}>
        {cards.map((card) => (
          <CategoryCard key={card.id} item={card} />
        ))}
      </Slide>
      <div className='features'>
        <div className='container'>
          <div className='item'>
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className='title'>
              <img src={check} alt='' />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className='title'>
              <img src={check} alt='Check icon' />
              Quality work done quicklyyy
            </div>
            <p>
              Find the right freelancer to begin working on your project within
              minutes.
            </p>
            <div className='title'>
              <img src={check} alt='Check icon' />
              Protected payments, every time
            </div>
            <p>
              Always know what you'll pay upfront. Your payment isn't released
              until you approve the work.
            </p>
            <div className='title'>
              <img src={check} alt='Check icon' />
              24/7 support
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>
          <div className='item'>
            <video
              src='https://www.youtube.com/watch?v=L_Luvci3GbU'
              controls
              autoPlay
              loop
            />
          </div>
        </div>
      </div>
      <div className='explore'>
        <div className='container'>
          <h1>Explore the marketplace</h1>
          <div className='items'>
            <div className='item'>
              <img
                src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg'
                alt=''
              />
              <div className='line'></div>
              <span>Graphics & Design</span>
            </div>
            <div className='item'>
              <img
                src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg'
                alt=''
              />
              <div className='line'></div>

              <span>Digital Marketing</span>
            </div>
            <div className='item'>
              <img
                src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg'
                alt=''
              />
              <div className='line'></div>
              <span>Writing & Translation</span>
            </div>
            <div className='item'>
              <img
                src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg'
                alt=''
              />
              <div className='line'></div>
              <span>Video & Animation</span>
            </div>
            <div className='item'>
              <img
                src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg'
                alt=''
              />
              <div className='line'></div>
              <span>Music & Audio</span>
            </div>
            <div className='item'>
              <img
                src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg'
                alt=''
              />
              <div className='line'></div>
              <span>Programming & Tech</span>
            </div>
            <div className='item'>
              <img
                src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg'
                alt=''
              />
              <div className='line'></div>
              <span>Business</span>
            </div>
            <div className='item'>
              <img
                src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg'
                alt=''
              />
              <div className='line'></div>
              <span>Lifestyle</span>
            </div>
            <div className='item'>
              <img
                src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg'
                alt=''
              />
              <div className='line'></div>
              <span>Data</span>
            </div>
            <div className='item'>
              <img
                src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/photography.01cf943.svg'
                alt=''
              />
              <div className='line'></div>
              <span>Photography</span>
            </div>
          </div>
        </div>
      </div>
      <div className='features dark'>
        <div className='container'>
          <div className='item'>
            <h1>
              Flybeer <i>business</i>
            </h1>
            <h1>
              A business solution designed for <i>teams</i>
            </h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>
            <div className='title'>
              <img src={check} alt='Check icon' />
              Connect to freelancers with proven business experience
            </div>

            <div className='title'>
              <img src={check} alt='Check icon' />
              Get matched with the perfect talent by a customer success manager
            </div>

            <div className='title'>
              <img src={check} alt='Check icon' />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button>Explore Flybeer Business</button>
          </div>
          <div className='item'>
            <img
              src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png'
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
