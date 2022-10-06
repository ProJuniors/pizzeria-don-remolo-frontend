import pizza from '../assets/backround/pizza.png';

export default function Banner({ children }) {
  return (
    <div className="pl-[49px] w-full">
      <div className="bg-bg-image bg-no-repeat bg-right-top h-[1180px] relative">
        <div className="w-[973px] max-w-[973px] h-[1165px] float-right shape flex" />
        <div className="">
          <h2 className="pt-80 font-Poppins font-semibold text-5xl leading-[72px] text-principal">
            Compra desde la comodidad de tu casa
          </h2>
          <p className="font-Poppins font-normal text-3xl leading-[45px] mt-[49px] text-black">
            Elegí la comida que más te guste, confirmá y pedí.
          </p>
          <p className="font-Poppins font-semibold text-xl leading-[30px] underline mt-[49px] decoration-solid">
            Mirá nuestro catálogo
          </p>
        </div>
        <div className="absolute top-20 right-28">
          <img className="" src={pizza} alt="Pizza" />
        </div>
      </div>
      {children}
    </div>
  );
}
