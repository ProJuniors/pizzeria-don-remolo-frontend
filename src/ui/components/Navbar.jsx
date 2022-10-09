import logo from '../../../assets/logos/logo.png';
import shoppingCart from '../../../assets/icons/icon-shopping-cart.svg';

// import bgImg from '../assets/backround/Union.png';

export default function Navbar() {
  return (
    <div className="bg-[#E91717] flex justify-between items-center w-full h-[112px]">
      <div className="flex justify-between items-center gap-[18px] ml-[50px]">
        <img src={logo} alt="Logo don remolo" className="navbar-logo" />
        <h3 className="font-IBM-Plex-Mono font-bold text-[40px] leading-[52px] text-white">
          DON REMOLO
        </h3>
      </div>
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
        <div className="flex justify-center items-center bg-black py-[12px] px-[30px] rounded-[15px] gap-[15.12px]">
          <img className="w-[19.6px] h-[19.98px]" src={shoppingCart} alt="Shopping Cart" />
          <span className="not-italic font-normal text-xl text-white">Ver carrito</span>
        </div>
      </div>
    </div>
  );
}
