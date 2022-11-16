import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../../hooks/useForm';
import { useWhatsappMessage } from '../../../hooks/useWhatsappMessage';
import { getUserData } from '../../../store/features/shoppingCart/shoppingCartSlice';
import { validateToSubmit, validator, errorsMessage } from '../../../utils/validateFields.utils';
import ErrorMessage from './ErrorMessage';

const initialForm = { name: '', phone: '', note: '' };

export default function FormData() {
  const { 
    name, 
    phone, 
    note, 
    onInputChange, 
    formState,
    validation,
    setValidation
  } = useForm(initialForm, validator);

  const { message } = useWhatsappMessage();

  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateToSubmit(validation)) {
      // eslint-disable-next-line no-undef
      window.open(message, '_black');
    } else {
      alert("Aqui va una alerta de que no se puede enviar")
    }
  };
  useEffect(() => {
    dispatch(getUserData({ name, phone, note }));
    console.log(validation)
  }, [formState]);

  useEffect(() => {
    if(note === "") setValidation({ ...validation, note: true})
  },[])
  return (
    <section className="mx-[64px] font-Nunito mb-36">
      <h3 className="font-semibold text-3xl leading-[41px] not-italic mb-8">
        Para confirmar la compra, por favor completá los siguientes datos:
      </h3>
      <form className="w-full flex flex-col gap-[36px] font-Roboto not-italic font-medium text-[#8D8D8D] text-[30px]">
        <input
          className="border border-solid/50 py-[45px] pl-[42px] rounded"
          type="text"
          placeholder="Nombre completo"
          name="name"
          value={name}
          onChange={onInputChange}
        />
        { name !== "" && validation["name"] === false ?<ErrorMessage field= {"name"}/>: <></>}
        <input
          className="border border-solid/50 py-[45px] pl-[42px] rounded"
          type="text"
          placeholder="Número de teléfono"
          name="phone"
          value={phone}
          onChange={onInputChange}
        />
        { phone !== "" && validation["phone"] === false ?<ErrorMessage field= {"phone"}/>: <></>}
        <textarea
          className="border pl-[42px] pt-16"
          onChange={onInputChange}
          rows="3"
          value={note}
          name="note"
          placeholder="Agregar nota al pedido..."
        />
        { note !== "" && validation["note"] === false ?<ErrorMessage field= {"note"}/>: <></>}
        <button
          className="font-Roboto font-medium text-3xl leading-[35px] text-white bg-black mx-auto w-full max-w-4xl py-[32px] rounded-xl"
          onClick={handleSubmit}
          type="button"
        >
          Confirmar compra
        </button>
      </form>
    </section>
  );
}
