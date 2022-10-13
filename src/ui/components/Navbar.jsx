import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import logo from '../../assets/logos/logo.png';
import shoppingCartIcon from '../../assets/icons/icon-shopping-cart.svg';

export default function Navbar() {
  const { cart } = useSelector(({ shoppingCart }) => shoppingCart);

  const [totalProduct, setTotalProducts] = useState(0);

  console.log(cart);

  useEffect(() => {
    setTotalProducts(cart.reduce((total, product) => product.quantity + total, 0));
  }, [cart]);

  return (
    <div className="bg-primary flex justify-between items-center w-full h-[112px] max-w-[1440px]">
      <Link to="/">
        <div className="flex justify-between items-center gap-[18px] ml-[50px]">
          <img src={logo} alt="Logo don remolo" className="navbar-logo" />
          <h3 className="font-IBM-Plex-Mono font-bold text-[40px] leading-[52px] text-white">
            DON REMOLO
          </h3>
        </div>
      </Link>
      <div className="flex justify-center items-center gap-[47px] mr-[34px]">
        <ul className="flex justify-center items-center gap-[47px] list-none">
          <li>
            <a className="no-underline not-italic font-normal text-xl text-white" href="/">
              Categorías
            </a>
          </li>
          <li>
            <a className="no-underline not-italic font-normal text-xl text-white" href="/">
              Sucursales
            </a>
          </li>
          <li>
            <a className="no-underline not-italic font-normal text-xl text-white" href="/">
              Contactanos
            </a>
          </li>
        </ul>
        <Link to="/cart">
          <div className="flex justify-center items-center bg-secondary py-[12px] px-[30px] rounded-[15px] gap-[15.12px]">
            <img className="w-[19.6px] h-[19.98px]" src={shoppingCartIcon} alt="Shopping Cart" />
            <span className="not-italic font-normal text-xl text-white">
              Ver carrito {totalProduct}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
