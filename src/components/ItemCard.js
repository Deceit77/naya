import React from 'react';

const ItemCard = ({ image, title, price }) => (
  <div className="item">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>${price}</p>
  </div>
);

export default ItemCard;
