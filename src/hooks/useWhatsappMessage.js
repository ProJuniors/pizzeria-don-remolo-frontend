import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const useWhatsappMessage = () => {
  const { cart, userData, totalToPay } = useSelector(({ shoppingCart }) => shoppingCart);

  const [message, setMessage] = useState('');
  const bussinesPhone = '+573022626346';
  const bussinesName = 'Don Remolo';
  useEffect(() => {
    let listOfProducts = '';
    cart.forEach((product) => {
      listOfProducts += `- *${product.productName}* (${product.quantity}) %0a`;
    });

    const newMessage = `https://wa.me/${bussinesPhone}?text=Hola *${bussinesName}*, deseo solicitar el siguiente pedido: %0a%0a *--- DETALLE DEL PEDIDO ---* %0a${listOfProducts} %0a*Nota adicional:* ${userData.note} %0a*Total:* ${totalToPay}  %0a%0a*--- INFORMACION DE CONTACTO ---* %0a*Nombre:* ${userData.name} %0a*Telefono:* ${userData.phone}`;
    setMessage(newMessage);
  }, [userData]);

  return {
    message,
  };
};
