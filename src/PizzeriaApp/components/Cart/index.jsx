import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import CartProduct from './CartProduct';
import FormData from '../FormData';

export default function Cart() {
  const { cart } = useSelector(({ shoppingCart }) => shoppingCart);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const productPriceTotal = cart.reduce((value, product) => {
      const calcTotal = product.price * product.quantity;
      return value + calcTotal;
    }, 0);
    setTotal(productPriceTotal);
  }, [cart]);

  return (
    <>
      <section>
        <div className="pl-[67px] bg-bg-banner-cart bg-no-repeat h-[244px] flex flex-col justify-center font-Nunito text-white ">
          <h1 className="font-bold text-[40px] leading-[54.56px]">Pizza de rúcula y jamón</h1>
          <p className="font-normal text-[25px] leading-[34.1px]">
            Aprovecha los descuentos de esta semana
          </p>
        </div>
      </section>
      <section className="pt-[64px] px-[66px] font-Nunito text-black mb-[80px]">
        <h3 className="font-bold text-[40px] leading-[55px] mb-10">Finaliza tu compra</h3>
        <div className="grid gap-5">
          {cart.map((product) => (
            <CartProduct key={product.id} product={product} />
          ))}
        </div>
        <div className="flex flex-row justify-between items-center font-Nunito mt-[86px]">
          <h4 className="ml-[12px] text-4xl font-semibold text-[45px] leading-[61.38px]">Total</h4>
          <span className="font-bold text-[45px] leading-[61.38px] ">${total}</span>
        </div>
      </section>
      <FormData />
    </>
  );
}
