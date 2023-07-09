import React from 'react';
import './home.scss';
import Featured from '../../components/featured/Featured';
import TrustedBy from '../../components/trustedBy/TrustedBy';
import Slide from '../../components/slide/Slide';
import { cards } from '../../data';
import CategoryCard from '../../components/categoriesGigs/CategoryCard';

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
    </div>
  );
};

export default Home;
