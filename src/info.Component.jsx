
import React from 'react';

const Info = ({ image, title, price }) => {
  return (
    <div className="info-container">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>${price}</p>
    </div>
  );
};

export default Info;
