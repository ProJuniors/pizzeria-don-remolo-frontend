import React from 'react';
import pizza from '../assets/image.png';

const index = () => (
  <div className="relative w-[400px] h-[400px] rounded-[5px]">
    <img
      className="w-full h-full object-center object-cover rounded-[5px]"
      src={pizza}
      alt="Pizza"
    />
    <div className="absolute bottom-0 w-full bg-black/[0.6] w-full h-[80px] flex items-center bg-white/[0.6]">
      <span className="ml-[26px] text-[28px] font-Inter font-normal">Texto de la imagen</span>
    </div>
  </div>
);

export default index;
