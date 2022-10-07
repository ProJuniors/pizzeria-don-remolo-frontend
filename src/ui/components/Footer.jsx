import { BsFacebook, BsInstagram } from 'react-icons/bs';
import logo from '../../../assets/logos/logo.png';

export default function Footer() {
  return (
    <div className="bg-black text-white grid grid-cols-3 h-[362px]">
      <section className="mt-[72px] ml-[67px] w-[206px]">
        <div className="relative">
          <h3 className="font-IBM-PLEX-SANS-DEVANAGARI text-[40px] font-semibold leading-[61.2px] w-full">
            DON REMOLO
          </h3>
          <img className="absolute top-[-40px] right-[-20px] w-[138.03px]" src={logo} alt="" />
        </div>
        <span className="font-IBM-PLEX-SANS-DEVANAGARI font-light text-[25px] leading-[38.25px] ml-[26px]">
          Pizzería
        </span>
      </section>
      <section className="grid grid-cols-3 ">
        <article className="flex flex-col">
          <h3>Secciones</h3>
          <a href="/">Inicio</a>
          <a href="/">Categorías</a>
          <a href="/">Catálogo</a>
          <a href="/">Sucursales</a>
        </article>
        <article className="flex flex-col">
          <h3>Categorías</h3>
          <a href="/">Pizzas</a>
          <a href="/">Empanadas</a>
          <a href="/">Gaseosas</a>
          <a href="/">Postres</a>
        </article>
        <article className="flex flex-col">
          <h3>Sucursales</h3>
          <a href="/">-Av. Colon 1595</a>
          <a href="/">-Cartagena 1420</a>
          <a href="/">-Córdoba 8500</a>
          <a href="/">-La plata 666</a>
        </article>
        <section className="col-span-3">
          <div>
            <p>2022 Pizzería Don Remolo. Diseño y desarrollo por Projuniors</p>
          </div>
          <div className="flex justify-center gap-[22.68px] mt-[27px]">
            <BsFacebook size={40} />
            <BsInstagram size={40} />
          </div>
        </section>
      </section>
    </div>
  );
}
