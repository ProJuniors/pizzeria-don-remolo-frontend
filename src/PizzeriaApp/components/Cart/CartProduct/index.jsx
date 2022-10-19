import React, { useEffect } from 'react';
import { BsTrash } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  getTotal,
  removeFromCart,
  subtractFromCart,
} from '../../../../store/features/shoppingCart/shoppingCartSlice';

export default function CartProduct({ product }) {
  const { urlImage, productName, description, price, quantity, id } = product;

  const dispatch = useDispatch();

  const { cart } = useSelector(({ shoppingCart }) => shoppingCart);
  useEffect(() => {
    dispatch(getTotal());
  }, [cart]);

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart({ id }));
    dispatch(getTotal());
  };

  return (
    <article className="flex flex-row justify-between bg-white w-full border border-solid border-[#DADADA] drop-shadow-[0_4px_1px_rgba(0,0,0,0.25)]">
      <div className="flex justify-center items-center flex-row">
        <img src={urlImage} alt={productName} />
        <div className="pl-[25px] flex flex-col gap-6">
          <h4 className="font-bold text-[35px] leading-[47.74px]">{productName}</h4>
          <p className="font-normal text-[25px] leading-[34.1px]">{description}</p>
          <span className="font-medium text-[30px] leading-[40.92px]">${price}</span>
        </div>
      </div>
      <div className="flex flex-col justify-between p-3 font-Roboto">
        <button
          onClick={handleRemoveFromCart}
          type="button"
          className="flex justify-end items-center gap-2 "
        >
          <span className="font-Roboto font-normal text-[15px]">Eliminar</span>{' '}
          <BsTrash size={17} />
        </button>
        <div className="bg-black text-white flex flex-row justify-around rounded-[5px] text-2xl">
          <button
            onClick={() => dispatch(subtractFromCart({ id }))}
            type="button"
            className="px-[18px]"
          >
            -
          </button>
          <span className="p-3">{quantity}</span>
          <button onClick={() => dispatch(addToCart({ id }))} type="button" className="px-[18px]">
            +
          </button>
        </div>
      </div>
    </article>
  );
}
