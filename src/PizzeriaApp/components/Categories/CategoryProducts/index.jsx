import React from 'react';
import ProductSection from './ProductsSection';

const index = ({ show }) => (
  <div id="products" className="w-full">
    <h3 className="mt-[50px] mb-[30px] text-[30px] font-medium font-Roboto">Catálogo</h3>
    <ProductSection show={show} />
  </div>
);

export default index;
