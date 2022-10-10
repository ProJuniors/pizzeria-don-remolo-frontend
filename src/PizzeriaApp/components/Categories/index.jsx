// import { useDispatch, useSelector } from 'react-redux';
import buttonIcons from './constants/buttonIcons';
import CategoryButton from './CategoryButton.jsx';
// import { addToCart } from '../../features/shoppingCart/shoppingCartSlice';

export default function Category() {
  // const count = useSelector(({ shoppingCart }) => shoppingCart);

  // const dispatch = useDispatch();

  return (
    <div id="categories" className="w-full px-[63px] mb-[154px]">
      <h2 className="font-Poppins font-medium text-[30px] text-black mb-[30px]">
        ¿Qué te gustaría comer hoy?
      </h2>
      <button
        type="button"
        // onClick={() => dispatch(addToCart({ id: 2, productName: 'Pizza', price: 100 }))}
      >
        Click
      </button>
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
