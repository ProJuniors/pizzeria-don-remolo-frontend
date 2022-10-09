import React from 'react';

function CategoryButton({ categories, selected }) {
  const { alt } = categories;
  const style = `font-Poppins w-[290px] h-[109px] bg-white rounded-[60px] drop-shadow-[0px_8px_4px_rgba(0,0,0,0.3)] text-[25px] font-normal`;
  const style1 = `font-Poppins w-[290px] h-[109px] bg-black text-white rounded-[60px] drop-shadow-[0px_8px_4px_rgba(0,0,0,0.3)] text-[25px] font-normal`;
  return (
    <button className={selected !== 0 ? style : style1} type="button">
      {alt}
    </button>
  );
}

export default CategoryButton;
