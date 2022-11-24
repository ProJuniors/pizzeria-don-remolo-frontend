import React, { useEffect } from 'react';
import { useForm } from '../../../hooks/useForm';
import useShoppingCartStore from '../../../hooks/useShoppingCartStore';
import { useWhatsappMessage } from '../../../hooks/useWhatsappMessage';
import { validateToSubmit, validator } from '../../../utils/validateFields.utils';
import ErrorMessage from './ErrorMessage';

const initialForm = { name: '', phone: '', note: '' };

export default function FormData() {
  const { name, phone, note, onInputChange, formState, validation, setValidation } = useForm(
    initialForm,
    validator
  );

  const { startGettingUserData } = useShoppingCartStore();

  const { message } = useWhatsappMessage();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateToSubmit(validation)) {
      // eslint-disable-next-line no-undef
      window.open(message, '_black');
    } else {
      alert('Aqui va una alerta de que no se puede enviar');
    }
  };
  useEffect(() => {
    startGettingUserData({ name, phone, note });
  }, [formState]);

  useEffect(() => {
    if (note === '') setValidation({ ...validation, note: true });
  }, []);
  return (
    <section className="mx-[22px] font-Nunito mb-[22px]">
      <h3 className="font-semibold text-xl leading-[34px] not-italic mb-8">
        Para confirmar la compra, por favor completá los siguientes datos:
      </h3>
      <form className="w-full flex flex-col gap-[16px] font-Roboto not-italic font-medium text-[#8D8D8D] text-[20px]">
        <input
          className="border border-solid/50 py-[25px] px-[22px] rounded"
          type="text"
          placeholder="Nombre completo"
          name="name"
          value={name}
          onChange={onInputChange}
        />
        {name !== '' && validation['name'] === false ? <ErrorMessage field={'name'} /> : <></>}
        <input
          className="border border-solid/50 py-[25px] px-[22px] rounded"
          type="text"
          placeholder="Número de teléfono"
          name="phone"
          value={phone}
          onChange={onInputChange}
        />
        {phone !== '' && validation['phone'] === false ? <ErrorMessage field={'phone'} /> : <></>}
        <textarea
          className="border px-[22px] py-[22px] "
          onChange={onInputChange}
          rows="3"
          value={note}
          name="note"
          placeholder="Agregar nota al pedido..."
        />
        {note !== '' && validation['note'] === false ? <ErrorMessage field={'note'} /> : <></>}
        <button
          className="font-Roboto font-medium text-lg leading-[35px] text-white mt-[22px] bg-black mx-auto w-full max-w-4xl py-[12px] rounded-xl"
          onClick={handleSubmit}
          type="button"
        >
          Confirmar compra
        </button>
      </form>
    </section>
  );
}
