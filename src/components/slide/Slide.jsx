import React from 'react';
import './slide.scss';
import Slider from 'infinite-react-carousel';
import CategoryCard from '../categoriesGigs/CategoryCard';
import { cards } from '../../data';

const Slide = () => {
  return (
    <div className='slide'>
      <div className='container'>
        <Slider slidesToShow={5}>
          {cards.map((card) => (
            <CategoryCard item={card} key={card.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
