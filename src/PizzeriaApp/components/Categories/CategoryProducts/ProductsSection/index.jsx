import React from 'react';
import { Waveform } from '@uiball/loaders';
import { useFetch } from '../../../../../services/useFetch';
import CardProduct from '../CardProduct.js';

const index = ({ show }) => {
  const { active } = show;
  const { data, loaded, error } = useFetch('https://api-remolo.onrender.com/api/v1.0/products');
  if (error) console.log(error);

  if (!loaded) {
    return <Waveform size={40} lineWeight={3.5} speed={1} color="black" />;
  }

  return (
    <div className="grid w-full grid-cols-3 gap-[32px]">
      {data.products
        .filter((product) => product.category === active.name)
        // eslint-disable-next-line no-shadow
        .map((product, index) => {
          const key = `card-${index}`;
          return <CardProduct key={key} product={product} />;
        })}
    </div>
  );
};

export default index;
