import React from 'react';
import { useForm } from '../../../hooks/useForm';

export default function FormData() {
  const { name, phone, nota, onInputChange } = useForm({ name: '', phone: '', nota: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name, phone, nota });
  };

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
        <input
          className="border border-solid/50 py-[45px] pl-[42px] rounded"
          type="text"
          placeholder="Número de teléfono"
          name="phone"
          value={phone}
          onChange={onInputChange}
        />
        <textarea
          className="border pl-[42px] pt-16"
          onChange={onInputChange}
          rows="3"
          value={nota}
          name="nota"
          placeholder="Agregar nota al pedido..."
        />

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
