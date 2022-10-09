import React from 'react';
import PromotionCard from './PromotionCard';

export default function Promotions() {
  return (
    <div className="w-full px-[64px] mb-[131px]">
      <h3 className="font-bold mb-[60px] mt-[64px] font-Poppins font-medium text-3xl">
        ¡Aprovecha las promociones de la semana!
      </h3>
      <div className="grid w-[1272px] mr-[104px] grid-cols-3 gap-[36px]">
        <PromotionCard />
        <PromotionCard />
        <PromotionCard />
      </div>
    </div>
  );
}
