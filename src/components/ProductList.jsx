import React from 'react';

export default function ProductList({ products }) {
  return (
    <div>
      <img src={products.urlImage} alt={products.productName} />
      <div>
        <p>{products.productName}</p>
        <span>{products.description}</span>
        <div>
          <span>{products.price}</span>
          <button className="block" type="button">
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}
