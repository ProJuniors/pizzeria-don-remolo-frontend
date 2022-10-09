import buttonIcons from './constants/buttonIcons';
import CategoryButton from './CategoryButton.jsx';

export default function Category() {
  return (
    <div className="w-full px-[63px] mb-[154px]">
      <h2 className="font-Poppins font-medium text-[30px] text-black mb-[30px]">
        ¿Qué te gustaría comer hoy?
      </h2>
      <h3 className="font-Poppins font-medium text-[20px] mb-[51px]">
        Mira las distintas categorías
      </h3>
      <div className="w-full flex gap-[53px]">
        {buttonIcons.map((icon, index) => {
          const key = `icon-${index}`;
          return <CategoryButton key={key} categories={icon} selected={index} />;
        })}
      </div>
    </div>
  );
}
