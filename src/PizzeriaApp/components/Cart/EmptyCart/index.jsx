import React from 'react';
import { HashLink } from 'react-router-hash-link';

import emptyCart from '../../../../assets/images/empty-cart.png';

export default function EmptyCart() {
  return (
    <div className="w-full flex flex-col justify-center items-center px-[22px] text-center py-[50px] font-Roboto">
      <div className="w-[313px]">
        <img src={emptyCart} />
      </div>
      <p className="text-[#B3404A] font-medium text-[45px] leading-[53px] mt-5">
        ¡Tu carrito está vacio!
      </p>
      <p className="font-normal text-[30px] leading-[35px] mt-5">
        Agrega productos para seguir comprando
      </p>

      <HashLink
        scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
        to="/#categories"
      >
        <button
          className="font-medium text-[25px] leading-[29px] bg-black p-6 text-white rounded-2xl mt-10"
          type="button"
        >
          Agregar productos
        </button>
      </HashLink>
    </div>
  );
}
