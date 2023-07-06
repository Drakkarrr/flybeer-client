import React from 'react';
import './trustedBy.scss';

const TrustedBy = () => {
  return (
    <div className='trustedBy'>
      <div className='container'>
        <span>Trusted by:</span>
        <img
          src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook2x.188a797.png'
          alt='Facebok'
        />
        <img
          src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google2x.06d74c8.png'
          alt='Google'
        />
        <img
          src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix2x.887e47e.png'
          alt='Netflix'
        />
        <img
          src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg2x.6dc32e4.png'
          alt='PanDG2x'
        />
        <img
          src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal2x.22728be.png'
          alt='Paypal'
        />
      </div>
    </div>
  );
};

export default TrustedBy;
