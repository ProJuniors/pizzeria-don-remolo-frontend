import { MdAddShoppingCart } from 'react-icons/md';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, getTotal } from '../../../../../store/features/shoppingCart/shoppingCartSlice';

const index = ({ product }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addToCart(product));
    dispatch(getTotal());
  };

  return (
    <div className="w-full flex flex-col max-w-[352px] shadow-[0px_8px_4px_rgba(0,0,0,0.25)]">
      <img
        className="w-full h-[253px] object-contain"
        src={product.urlImage}
        alt={product.productName}
      />
      <div className="w-full px-[10px]">
        <h4 className="text-[25px] font-[700] mt-[15px]">{product.productName}</h4>
        <p className="text-[16px] font-medium"> {product.description}</p>
      </div>
      <div className="flex justify-between px-[10px] mt-[38.5px] mb-[19.5px]">
        <h4 className="text-[28px] font-medium font-Nunito">${product.price}</h4>
        <button
          onClick={handleClick}
          className="flex justify-center gap-[14.33px] items-center w-[151px] bg-black text-white rounded-[15px]"
          type="button"
        >
          <MdAddShoppingCart />
          <span>Agregar</span>
        </button>
      </div>
    </div>
  );
};

export default index;
