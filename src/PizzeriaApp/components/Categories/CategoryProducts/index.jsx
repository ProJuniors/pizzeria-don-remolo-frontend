import React from 'react';
import ProductSection from './ProductsSection';

const index = ({ show }) => (
  <div id="products" className="w-full px-[97px]">
    <h3 className="mt-[136px] mb-[82px] text-[35px] font-medium font-Roboto">Catálogo</h3>
    <ProductSection show={show} />
  </div>
);

export default index;
