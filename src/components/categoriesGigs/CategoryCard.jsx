import React from 'react';
import './categoryCard.scss';
import { Link } from 'react-router-dom';

const CategoryCard = ({ item }) => {
  return (
    <>
      <Link to={`/categories/${item.id}`}>
        <div className='category-card'>
          <img src={item.img} alt={item.title} />
          <span className='desc'>{item.desc}</span>
          <span className='title'>{item.title}</span>
        </div>
      </Link>
    </>
  );
};

export default CategoryCard;
