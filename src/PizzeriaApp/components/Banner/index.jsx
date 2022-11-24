import { HashLink } from 'react-router-hash-link';
import { useEffect } from 'react';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
import useShoppingCartStore from '../../../hooks/useShoppingCartStore';

export default function Banner() {
  const { startLoadingCarousel, carousel } = useShoppingCartStore();

  useEffect(() => {
    startLoadingCarousel();
  }, []);

  return (
    <Swiper
      className="relative"
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      slidesPerView={1}
      modules={[Autoplay]}
    >
      {carousel.map((element) => (
        <SwiperSlide key={element}>
          <div
            className="before:content-[' '] before:absolute before:top-0 before:left-0 before:flex before:w-full before:h-[calc(100vh-106px)] before:bg-black/60  justify-center bg-no-repeat bg-cover bg-center w-full h-[calc(100vh-106px)] max-h-[800px]"
            style={{ backgroundImage: `url(${element})` }}
          />

          {/* <img className="w-full object-cover relative" src={element} alt={element} /> */}
        </SwiperSlide>
      ))}
      <div className="ml-6 md:ml-[120px] max-w-[650px] text-white absolute top-[18%] z-[1]">
        <h2 className=" font-semibold text-[42px] leading-[52px] mb-5">
          Compra desde la comodidad de tu casa
        </h2>
        <p className=" font-normal text-[20px] leading-[32px] mb-9">
          Elegí la comida que más te guste, confirmá y pedí.
        </p>
        <HashLink
          scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          to="/#categories"
        >
          <button
            className="font-semibold text-base leading-[30px] underline decoration-white"
            type="button"
          >
            Mirá nuestro catálogo
          </button>
        </HashLink>
      </div>
    </Swiper>
  );
}
