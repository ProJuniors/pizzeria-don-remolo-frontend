import { BsTrash } from 'react-icons/bs';
import React from 'react';
import pizzaCart from '../../../assets/images/PizzaCart.png';

export default function Cart() {
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
          <article className="flex flex-row justify-between bg-white w-full border border-solid border-[#DADADA] drop-shadow-[0_4px_1px_rgba(0,0,0,0.25)]">
            <div className="flex justify-center items-center flex-row">
              <img src={pizzaCart} alt="" />
              <div className="pl-[25px] flex flex-col gap-6">
                <h4 className="font-bold text-[35px] leading-[47.74px]">Pizza de muzzarella</h4>
                <p className="font-normal text-[25px] leading-[34.1px]">
                  Base de pizza con salsa de tomate y muzzarella.
                </p>
                <span className="font-medium text-[30px] leading-[40.92px]">$1.800</span>
              </div>
            </div>
            <div className="flex flex-col justify-between p-3 font-Roboto">
              <button type="button" className="flex justify-end items-center gap-2 ">
                <span className="font-Roboto font-normal text-[15px]">Eliminar</span>{' '}
                <BsTrash size={17} />
              </button>
              <div className="bg-black text-white flex flex-row justify-around rounded-[5px] text-2xl">
                <button type="button" className="px-[18px]">
                  -
                </button>
                <span className="p-3">1</span>
                <button type="button" className="px-[18px]">
                  +
                </button>
              </div>
            </div>
          </article>

          <article className="flex flex-row justify-between bg-white w-full border border-solid border-[#DADADA] drop-shadow-[0_4px_1px_rgba(0,0,0,0.25)]">
            <div className="flex justify-center items-center flex-row">
              <img src={pizzaCart} alt="" />
              <div className="pl-[25px] flex flex-col gap-6">
                <h4 className="font-bold text-[35px] leading-[47.74px]">Pizza de muzzarella</h4>
                <p className="font-normal text-[25px] leading-[34.1px]">
                  Base de pizza con salsa de tomate y muzzarella.
                </p>
                <span className="font-medium text-[30px] leading-[40.92px]">$1.800</span>
              </div>
            </div>
            <div className="flex flex-col justify-between p-3 font-Roboto">
              <button type="button" className="flex justify-end items-center gap-2 ">
                <span className="font-Roboto font-normal text-[15px]">Eliminar</span>{' '}
                <BsTrash size={17} />
              </button>
              <div className="bg-black text-white flex flex-row justify-around rounded-[5px] text-2xl">
                <button type="button" className="px-[18px]">
                  -
                </button>
                <span className="p-3">1</span>
                <button type="button" className="px-[18px]">
                  +
                </button>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
