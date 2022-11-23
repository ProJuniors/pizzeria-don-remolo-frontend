import React, { useEffect } from 'react';
import { Waveform } from '@uiball/loaders';
import CardProduct from '../CardProduct.js';
import useShoppingCartStore from '../../../../../hooks/useShoppingCartStore.js';

const index = ({ show }) => {
  const { startLoadingProducts, data } = useShoppingCartStore();

  useEffect(() => {
    startLoadingProducts();
  }, []);

  const { active } = show;

  if (data.length === 0) {
    return <Waveform size={40} lineWeight={3.5} speed={1} color="black" />;
  }

  return (
    <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-[32px]">
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
