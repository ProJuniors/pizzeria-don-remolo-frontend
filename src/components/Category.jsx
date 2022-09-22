import pizza from '../assets/icons/pizza.svg';
import empanada from '../assets/icons/empanada.svg';
import soda from '../assets/icons/soda.svg';
import helado from '../assets/icons/helado.svg';

export default function Category() {
  return (
    <>
      <h2>Categorias</h2>
      <div className="flex gap-[19px]">
        <button
          className="py-[36px] px-[110px] border-[0.5px] border-black border-solid rounded-[60px] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
          type="button"
        >
          <img src={pizza} alt="Pizzas" />
        </button>
        <button
          className="py-[36px] px-[110px] border-[0.5px] border-black border-solid rounded-[60px] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
          type="button"
        >
          <img src={empanada} alt="Empanadas" />
        </button>
        <button
          className="py-[36px] px-[110px] border-[0.5px] border-black border-solid rounded-[60px] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
          type="button"
        >
          <img src={soda} alt="Gaseosas" />
        </button>
        <button
          className="py-[36px] px-[110px] border-[0.5px] border-black border-solid rounded-[60px] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
          type="button"
        >
          <img src={helado} alt="Postres" />
        </button>
      </div>
    </>
  );
}
