import React, { useEffect } from 'react';
import { BsTrash } from 'react-icons/bs';

import useShoppingCartStore from '../../../../hooks/useShoppingCartStore';

export default function CartProduct({ product }) {
  const { urlImage, productName, description, price, quantity, id } = product;

  const { cart, gettingTotal, startRemovingFromCart, addingFromCart, subtractingFromCart } =
    useShoppingCartStore();

  useEffect(() => {
    gettingTotal();
  }, [cart]);

  const handleRemoveFromCart = () => {
    startRemovingFromCart(id);
  };
  const handleAddFromCart = () => {
    addingFromCart(id);
  };
  const handleSubtractFromCart = () => {
    subtractingFromCart(id);
  };

  return (
    <article className="flex flex-col justify-between bg-white w-full border border-solid border-[#DADADA] drop-shadow-[0_4px_1px_rgba(0,0,0,0.25)]">
      <div className="flex justify-center items-center flex-col">
        <img className="object-contain w-full h-36" src={urlImage} alt={productName} />
        <div className="pl-[18px] pt-4 flex flex-col gap-4">
          <h4 className="font-bold text-[20px] leading-[24px]">{productName}</h4>
          <p className="font-normal text-[18px] leading-[24px]">{description}</p>
          <span className="font-medium text-[30px] leading-[40px]">${price}</span>
        </div>
      </div>
      <div className="flex justify-between flex-col-reverse gap-3 p-3 font-Roboto">
        <button
          onClick={handleRemoveFromCart}
          type="button"
          className="flex justify-end items-center gap-2 "
        >
          <span className="font-Roboto font-normal text-[15px]">Eliminar</span>{' '}
          <BsTrash size={17} />
        </button>
        <div className="bg-black text-white flex flex-row justify-around rounded-[5px] text-lg">
          <button onClick={handleSubtractFromCart} type="button" className="px-[10px]">
            -
          </button>
          <span className="p-3">{quantity}</span>
          <button onClick={handleAddFromCart} type="button" className="px-[10px]">
            +
          </button>
        </div>
      </div>
    </article>
  );
}
