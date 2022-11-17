import CartProduct from './CartProduct';
import FormData from '../FormData';
import EmptyCart from './EmptyCart';
import useShoppingCartStore from '../../../hooks/useShoppingCartStore';

export default function Cart() {
  const { cart, totalToPay } = useShoppingCartStore();

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
      {cart.length < 1 ? (
        <EmptyCart />
      ) : (
        <div>
          <section className="pt-[64px] px-[66px] font-Nunito text-black mb-[80px]">
            <h3 className="font-bold text-[40px] leading-[55px] mb-10">Finaliza tu compra</h3>
            <div className="grid gap-5">
              {cart.map((product) => (
                <CartProduct key={product.id} product={product} />
              ))}
            </div>
            <div className="flex flex-row justify-between items-center font-Nunito mt-[86px]">
              <h4 className="ml-[12px] text-4xl font-semibold text-[45px] leading-[61.38px]">
                Total
              </h4>
              <span className="font-bold text-[45px] leading-[61.38px] ">${totalToPay}</span>
            </div>
          </section>
          <FormData />
        </div>
      )}
    </>
  );
}
