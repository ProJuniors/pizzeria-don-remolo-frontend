import { MdAddShoppingCart } from 'react-icons/md';
import useShoppingCartStore from '../../../../hooks/useShoppingCartStore';

export default function PromotionCard({ favorite }) {
  const { startAddingFromCart } = useShoppingCartStore();

  const handleAddFromCart = () => {
    startAddingFromCart({ ...favorite, quantity: 1 });
  };

  return (
    <div className="relative rounded-[5px] overflow-hidden h-[250px] group">
      <img
        className="w-full h-full object-center object-contain rounded-[5px] hover:scale-125"
        src={favorite.urlImage}
        alt={favorite.productName}
      />
      <div className="absolute bottom-0 w-full h-[80px] flex items-center justify-center bg-white/[0.6]">
        <span className="ml-[26px] text-[24px] font-Inter font-normal">{favorite.productName}</span>
      </div>
      <button
        onClick={handleAddFromCart}
        className="bg-black p-3 text-white absolute bottom-14 right-5 rounded-xl active:scale-105 hidden group-hover:block"
        type="button"
      >
        <MdAddShoppingCart size={25} />
      </button>
    </div>
  );
}
