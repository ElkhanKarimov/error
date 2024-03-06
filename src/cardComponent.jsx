

import React from 'react';
import Info from './Info';

const Card = () => {
  const productInfo = {
    image: 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/06/mordecai-and-rigby-regular.jpg',
    title: 'Mordecai and Rigby',
    price: 10,
  };

  return (
    <div className="card-container">
      <Info {...productInfo} />
    </div>
  );
};

export default Card;
