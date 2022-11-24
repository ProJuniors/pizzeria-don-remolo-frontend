// import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import buttonIcons from './constants/buttonIcons';
import CategoryButton from './CategoryButton.jsx';
import CategoryProducts from './CategoryProducts';

export default function Category() {
  const [active, setActive] = useState(buttonIcons[0]);
  return (
    <div id="categories" className="w-full px-[22px] mb-[50px]">
      <h2 className="font-Poppins font-medium text-[30px] text-black mb-[30px]">
        ¿Qué te gustaría comer hoy?
      </h2>
      <h3 className="font-Poppins font-medium text-[20px] mb-[30px]">
        Mira las distintas categorías
      </h3>
      <div className="flex justify-between">
        {buttonIcons.map((btn, index) => {
          const key = `icon-${index}`;
          return <CategoryButton key={key} categories={btn} show={{ active, setActive }} />;
        })}
      </div>
      <CategoryProducts show={{ active }} />
    </div>
  );
}
