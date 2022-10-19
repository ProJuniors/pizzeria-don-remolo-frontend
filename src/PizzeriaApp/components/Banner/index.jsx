import { useDispatch, useSelector } from 'react-redux';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useFetch } from '../../../services/useFetch';
import { loadCarousel } from '../../../store/features/shoppingCart/shoppingCartSlice';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';

export default function Banner() {
  const dispatch = useDispatch();

  const { error } = useFetch('https://api-remolo.onrender.com/api/v1.0/carrusels', ({ data }) => {
    dispatch(loadCarousel(data));
  });

  const { carousel } = useSelector(({ shoppingCart }) => shoppingCart);

  if (error) console.log(error);

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
            className="justify-center bg-no-repeat bg-cover bg-center w-full h-[820px] "
            style={{ backgroundImage: `url(${element})` }}
          />

          {/* <img className="w-full object-cover relative" src={element} alt={element} /> */}
        </SwiperSlide>
      ))}
      <div className="ml-[160px] max-w-[650px] text-white absolute top-[35%] z-10">
        <h2 className=" font-semibold text-[46px] leading-[72px] mb-5">
          Compra desde la comodidad de tu casa
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
    </Swiper>
  );
}
