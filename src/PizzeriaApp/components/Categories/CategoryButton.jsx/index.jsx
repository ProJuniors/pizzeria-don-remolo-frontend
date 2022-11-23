import React from 'react';

function CategoryButton({ categories, show }) {
  const { name } = categories;
  const { active, setActive } = show;
  const generalStyle = `font-Poppins p-2 rounded-[60px] drop-shadow-[0px_8px_4px_rgba(0,0,0,0.3)] text-[15px] font-normal`;
  const bgWhite = ` ${generalStyle} bg-white`;
  const bgBlack = `${generalStyle} bg-black text-white`;
  return (
    <button
      className={active.name === name ? bgBlack : bgWhite}
      type="button"
      onClick={() => {
        setActive({ name });
      }}
    >
      {name}
    </button>
  );
}

export default CategoryButton;
