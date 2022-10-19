import React from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import PromotionCard from './PromotionCard';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Promotions() {
  const { data, loaded } = useSelector(({ shoppingCart }) => shoppingCart);

  return (
    <div className="w-full px-[64px] mb-[131px]">
      <h3 className="mb-[60px] mt-[64px] font-Poppins font-medium text-3xl">
        ¡Aprovecha las promociones de la semana!
      </h3>

      <Swiper slidesPerView={3} spaceBetween={50} navigation={true} modules={[Navigation]}>
        {loaded &&
          data.favorites.map((favorite) => (
            <SwiperSlide>
              <PromotionCard key={`promotions-${favorite}`} favorite={favorite} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
