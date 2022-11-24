import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import shoppingCartIcon from '../../../assets/icons/icon-shopping-cart.svg';
import useShoppingCartStore from '../../../hooks/useShoppingCartStore';

export default function MenuButton() {
  const { cart } = useShoppingCartStore();

  const [totalProduct, setTotalProducts] = useState(0);

  useEffect(() => {
    setTotalProducts(cart.reduce((total, product) => product.quantity + total, 0));
  }, [cart]);

  return (
    <Link to="/cart">
      <div className="p-6 rounded-full bg-black/60 bottom-2 right-2 z-20 fixed cursor-pointer md:hidden">
        <img className="w-5" src={shoppingCartIcon} alt="Icono de carrito de compras" />
        <span className="absolute bg-white rounded-full p-[10px] text-xs top-[7px] right-[7px] w-1 h-1 flex justify-center leading-[0]">
          {totalProduct}
        </span>
      </div>
    </Link>
  );
}
