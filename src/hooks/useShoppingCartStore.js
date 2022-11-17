import toast from 'react-hot-toast';

import pizzeriaApi from '../Api/pizzeriaApi';

import { useDispatch, useSelector } from 'react-redux';
import {
  addFromCart,
  getTotal,
  getUserData,
  loadCarousel,
  loadProducts,
  removeFromCart,
  subtractFromCart,
} from '../store/features/shoppingCart/shoppingCartSlice';

const useShoppingCartStore = () => {
  const notify = (msg) => toast.success(msg);
  const dispatch = useDispatch();
  const { data, carousel, cart, totalToPay, loaded } = useSelector((state) => state.shoppingCart);

  const gettingTotal = () => {
    dispatch(getTotal());
  };

  const addingFromCart = (id) => {
    dispatch(addFromCart({ id }));
  };
  const subtractingFromCart = (id) => {
    dispatch(subtractFromCart({ id }));
  };

  const startAddingFromCart = (product) => {
    dispatch(addFromCart({ ...product, quantity: 1 }));
    gettingTotal();
    notify('Producto añadido al carrito');
  };

  const startRemovingFromCart = (id) => {
    dispatch(removeFromCart({ id }));
    gettingTotal();
    notify('Producto eliminado del carrito');
  };

  const startLoadingProducts = async () => {
    try {
      const { data } = await pizzeriaApi.get('/products');
      dispatch(loadProducts(data));
    } catch (error) {
      console.log('Error cargando productos');
      console.log(error);
    }
  };

  const startLoadingCarousel = async () => {
    try {
      const { data } = await pizzeriaApi.get('/carrusels');
      dispatch(loadCarousel(data));
    } catch (error) {
      console.log('Error cargando carousel');
      console.log(error);
    }
  };

  const startGettingUserData = (data) => {
    dispatch(getUserData({ ...data }));
  };

  return {
    //Propiedades
    cart,
    data,
    carousel,
    totalToPay,
    loaded,

    //Metodos
    startAddingFromCart,
    subtractingFromCart,
    addingFromCart,
    startLoadingProducts,
    startLoadingCarousel,
    startRemovingFromCart,
    gettingTotal,
    startGettingUserData,
  };
};

export default useShoppingCartStore;
