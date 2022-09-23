import pizza from '../assets/backround/pizza.png';

export default function Banner() {
  return (
    <div className="w-full h-screen bg-zinc-50 flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto mt-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <div>
            <h1 className="text-7xl text-principal font-bold font-[Raleway]">
              Compra desde la comodidad de tu casa
            </h1>
          </div>
          <div>
            <p className="text-base text-black  font-[Roboto] py-10">
              Elegí la comida que más te guste, confirmá y pedí.
            </p>
          </div>
          <div>
            <p className="text-base2 py-20">Mirá nuestro catálogo</p>
          </div>
        </div>
        <div className="pizza">
          <img className="w-full object-scale-down " src={pizza} alt="/" />
        </div>
      </div>
    </div>
  );
}
