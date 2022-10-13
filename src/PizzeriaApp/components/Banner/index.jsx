export default function Banner() {
  return (
    <div className="font-Poppins text-white bg-bg-banner w-full h-[817px] bg-black/[0.5] flex flex-col align-middle justify-center">
      <div className="ml-[160px] max-w-[650px]">
        <h2 className=" font-semibold text-[46px] leading-[72px] mb-5">
          Compra desde la comodidad de tu casa.
        </h2>
        <p className=" font-normal text-[25px] leading-[37.5px] mb-9">
          Elegí la comida que más te guste, confirmá y pedí.
        </p>
        <a
          href="#categories"
          className="font-semibold text-sm leading-[30px] underline decoration-white"
        >
          Mirá nuestro catálogo
        </a>
      </div>
    </div>
  );
}
