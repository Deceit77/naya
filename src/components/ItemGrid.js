import React from 'react';
import ItemCard from './ItemCard';

// Example item data
const items = [
  { id: 1, image: 'mbImg', title: 'Item 1', price: 10.00 },
  { id: 2, image: 'tableFanImg', title: 'Item 2', price: 20.00 },
  { id: 3, image: 'tvImg', title: 'Item 3', price: 30.00 },
];

const ItemGrid = ({ images }) => (
  <div className="item-grid">
    {items.map(item => (
      <ItemCard
        key={item.id}
        image={images[item.image]}
        title={item.title}
        price={item.price}
      />
    ))}
  </div>
);

export default ItemGrid;
