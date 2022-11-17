import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import PromotionCard from './PromotionCard';
import 'swiper/css';
import 'swiper/css/navigation';
import useShoppingCartStore from '../../../hooks/useShoppingCartStore';

export default function Promotions() {
  const { data, loaded } = useShoppingCartStore();

  return (
    <div className="w-full px-[64px] mb-[131px]">
      <h3 className="mb-[60px] mt-[64px] font-Poppins font-medium text-3xl">
        ¡Aprovecha las promociones de la semana!
      </h3>

      <Swiper slidesPerView={3} spaceBetween={50} navigation={true} modules={[Navigation]}>
        {loaded &&
          data.favorites.map((favorite) => (
            <SwiperSlide key={`promotions-${favorite.id}`}>
              <PromotionCard favorite={favorite} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
