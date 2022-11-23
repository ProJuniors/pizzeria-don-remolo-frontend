import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useEffect, useState } from 'react';
import logo from '../../assets/logos/logo.png';
import shoppingCartIcon from '../../assets/icons/icon-shopping-cart.svg';
import useShoppingCartStore from '../../hooks/useShoppingCartStore';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export default function Navbar() {
  const { cart } = useShoppingCartStore();

  const [totalProduct, setTotalProducts] = useState(0);
  const [openMenu, setOpenMenu] = useState(true);

  useEffect(() => {
    setTotalProducts(cart.reduce((total, product) => product.quantity + total, 0));
  }, [cart]);

  return (
    <nav className="bg-primary flex justify-between items-center py-2">
      <Link to="/">
        <div className="flex justify-between items-center gap-1 ml-2">
          <img src={logo} alt="Logo don remolo" className="navbar-logo " />
          <h3 className="font-IBM-Plex-Mono font-bold text-[26px] md:text-[32px] text-white">
            DON REMOLO
          </h3>
        </div>
      </Link>

      <div>
        <ul
          className={`md:flex md:items-center md:gap-5 bg-white md:bg-primary md:pb-0 absolute md:static md:z-auto z-[2] left-0 w-full md:w-auto md:pl-0 pl-9 ${
            openMenu ? 'top-[-136px]' : 'top-[106px]'
          }`}
        >
          <li className="no-underline not-italic font-normal text-xl md:text-white text-black">
            <HashLink
              scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              to="/#categories"
            >
              Categorías
            </HashLink>
          </li>
          <Link to="/sucursales">
            <li className="no-underline not-italic font-normal text-xl md:text-white text-black">
              Sucursales
            </li>
          </Link>
          <Link to="/contactanos">
            <li className="no-underline not-italic font-normal text-xl md:text-white text-black">
              Contactanos
            </li>
          </Link>
          <Link className="hidden md:flex" to="/cart">
            <div className="md:justify-center md:mr-3 md:items-center bg-secondary md:py-[18px] md:px-[18px] md:rounded-[15px] relative">
              <img className="w-6 h-6 block" src={shoppingCartIcon} alt="Shopping Cart" />
              {totalProduct < 1 ? (
                ''
              ) : (
                <div className="rounded-full w-[22px] h-[22px] bg-white absolute top-0 right-0 flex justify-center items-center">
                  <span className="not-italic font-normal text-xs text-black leading-none">
                    {totalProduct > 99 ? '99+' : totalProduct}
                  </span>
                </div>
              )}
            </div>
          </Link>
        </ul>
      </div>
      <button
        onClick={() => setOpenMenu(!openMenu)}
        className="md:hidden cursor-pointer text-3xl mr-2 text-white font-black flex"
        type="button"
      >
        {openMenu ? <AiOutlineMenu /> : <AiOutlineClose />}
      </button>
    </nav>
  );
}
