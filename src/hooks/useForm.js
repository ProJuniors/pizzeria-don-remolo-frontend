import { useState } from 'react';

function createValidator (form) {
  let validator = {}
  Object.keys(form).forEach(key => {
    if(!validator[key]) {
      validator[key] = false
    } 
  })

  return validator
}

export const useForm = (initialForm, validator) => {
  const [formState, setFormState] = useState(initialForm);
  const [validation, setValidation] = useState(createValidator(initialForm))

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    if (validator[name](value)) {
      setValidation({ ...validation, [name]: true })
    } else {
      setValidation({ ...validation, [name]: false })
    }

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    validation,
    setValidation
  };
};
