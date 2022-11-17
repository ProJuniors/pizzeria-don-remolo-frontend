import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useEffect, useState } from 'react';
import logo from '../../assets/logos/logo.png';
import shoppingCartIcon from '../../assets/icons/icon-shopping-cart.svg';
import useShoppingCartStore from '../../hooks/useShoppingCartStore';

export default function Navbar() {
  const { cart } = useShoppingCartStore();

  const [totalProduct, setTotalProducts] = useState(0);

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
          <li className="no-underline not-italic font-normal text-xl text-white">
            <HashLink
              scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              to="/#categories"
            >
              Categorías
            </HashLink>
          </li>
          <Link to="/sucursales">
            <li className="no-underline not-italic font-normal text-xl text-white">Sucursales</li>
          </Link>
          <Link to="/contactanos">
            <li className="no-underline not-italic font-normal text-xl text-white">Contactanos</li>
          </Link>
        </ul>
        <Link to="/cart">
          <div className="flex justify-center items-center bg-secondary py-[12px] px-[30px] rounded-[15px] gap-[15.12px]">
            <img className="w-[19.6px] h-[19.98px]" src={shoppingCartIcon} alt="Shopping Cart" />
            <span className="not-italic font-normal text-xl text-white">
              Ver carrito {totalProduct > 99 ? '99+' : totalProduct}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
