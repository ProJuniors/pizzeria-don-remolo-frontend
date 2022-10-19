import React from 'react';
import { Waveform } from '@uiball/loaders';
import { useDispatch, useSelector } from 'react-redux';
import { useFetch } from '../../../../../services/useFetch';
import CardProduct from '../CardProduct.js';
import { loadProducts } from '../../../../../store/features/shoppingCart/shoppingCartSlice';

const index = ({ show }) => {
  const { active } = show;
  const dispatch = useDispatch();
  const { error } = useFetch('https://api-remolo.onrender.com/api/v1.0/products', ({ data }) => {
    dispatch(loadProducts(data));
  });

  const { data } = useSelector(({ shoppingCart }) => shoppingCart);
  if (error) console.log(error);

  if (data.length === 0) {
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
