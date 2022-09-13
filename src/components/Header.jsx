import logo from '../assets/logos/logo.png';
import shoppingCart from '../assets/icons/icon-shopping-cart.svg';

import '../styles/Header.css';

export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="Logo don remolo" className="navbar-logo" />
          <h3 className="navbar-logo-name">DON REMOLO</h3>
        </div>
        <div className="navbar-right">
          <ul>
            <li>
              <a href="/">Categorías</a>
            </li>
            <li>
              <a href="/">Sucursales</a>
            </li>
            <li>
              <a href="/">Contactanos</a>
            </li>
          </ul>
          <div className="navbar-shopping-cart">
            <img src={shoppingCart} alt="Shopping Cart" />
            <span>Ver carrito</span>
          </div>
        </div>
      </nav>
    </header>
  );
}
