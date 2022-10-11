import React from 'react';
import { useFetch } from '../../../../services/useFetch';
import CardProduct from './CardProduct.js';

const index = ({ show }) => {
  const { active } = show;
  const { data, loaded, error } = useFetch('http://localhost:6500/api/v1.0/products');
  if (loaded) {
    return (
      <div id="products" className="w-full px-[97px]">
        <h3 className="mt-[136px] mb-[82px] text-[35px] font-medium font-Roboto">Catálogo</h3>
        <div className="grid w-full grid-cols-3 gap-[32px]">
          {!loaded ? (
            <p>Loading...</p>
          ) : (
            data.products
              .filter((product) => product.category === active.name)
              // eslint-disable-next-line no-shadow
              .map((product, index) => {
                const key = `card-${index}`;
                return <CardProduct key={key} product={product} />;
              })
          )}
        </div>
      </div>
    );
  }
  // eslint-disable-next-line no-console
  if (error) console.log(error);

  return <div>Loading...</div>;
};

export default index;
