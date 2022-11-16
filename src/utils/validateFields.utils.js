const validator = {
  name: (value) => /^([a-zA-ZáéíóúÁÉÍÓÚ]{2})+[a-zA-ZáéíóúÁÉÍÓÚ\s]{0,150}$/.test(value),
  phone: (value) => /^[\d]{10,}$/.test(value),
  note: (value) => /^[a-zA-ZáéíóúÁÉÍÓÚ\s\d\.\/]{0,250}$/.test(value),
}

const errorsMessage = {
  name: "Nombre debe contener más de 2 letras, asegurese de no tener espacios vacios al inicio.",
  phone: "Número de telefono de contener más de 10 números",
  note: "Ha ingresado caracteres no permitidos",
}

function validateToSubmit(validationObject) {
  let keys = Object.keys(validationObject)
  let totalKeys = keys.length
  let counter = 0
  keys.forEach(key => {
    if (validationObject[key] === true) {
      counter++
    }
  })

  if(counter === totalKeys) return true
  return false
}

export { validateToSubmit, validator, errorsMessage }