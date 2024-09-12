import React from 'react';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container" id={greeting.toLowerCase().replace(/ /g, '')}>
      <h1>{greeting}</h1>
    </div>
  );
};

export default ItemListContainer;
