'use client'
import validator from 'validator'

// Este hooks se encarga de crear las validaciones de los input, recibir el valor del mismo y devolver true o false dependiendo de la condicion

const useFieldValidator = () => {
  // Si el campo es requerido
  const isRequired = (value: any): boolean => {
    if (!value) return false
    value = `${value}`
    if (validator.isEmpty(value)) return false
    return true
  }

  // Si el campo solo recibe letras
  const onlyLetters = (value: any): boolean => {
    value = `${value}`
    if (!validator.isAlpha(value, 'es-ES', { ignore: ' ' })) return false
    return true
  }

  // Si el campo solo debe ser un numero Entero
  const isInt = (value: any): boolean => {
    value = `${value}`
    if (!validator.isInt(value)) return false
    return true
  }

  // Si el campo solo debe ser un numero float
  const isFloat = (value: any): boolean => {
    value = `${value}`
    if (!validator.isFloat(value)) return false
    return true
  }

  // Si el campo debe tener un minimo de ciertos caracteres
  const minLength = (value: any, min: number): boolean => {
    value = `${value}`
    if (value.trim().length < min) return false
    return true
  }

  // Si el campo debe tener un maximo de ciertos caracteres
  const maxLength = (value: any, max: number): boolean => {
    value = `${value}`
    if (value.trim().length > max) return false
    return true
  }

  // Si el campo es de tipo email
  const isEmail = (value: any): boolean => {
    value = `${value}`
    if (!validator.isEmail(value)) return false
    return true
  }

  // Si el campo es un numero telefonico
  const isPhoneNumber = (value: any): boolean => {
    value = `${value}`
    if (!validator.isInt(value)) return false
    if (!validator.isMobilePhone(value)) return false
    return true
  }

  // Si el campo es de tipo password, tiene ciertas reglas por default que puedes modificar
  const isPassword = (value: any): boolean => {
    value = `${value}`
    if (
      !validator.isStrongPassword(value, {
        minLength: 6,
        minNumbers: 1,
        minLowercase: 1,
        minUppercase: 1,
        minSymbols: 1,
      })
    ) {
      return false
    }

    return true
  }

  // Si el campo tiene que ser igual a otro
  const isEqual = (firstValue: any, secondValue: any): boolean => {
    if (secondValue !== firstValue || firstValue === '') return false
    return true
  }

  // Si el valor numero debe tener un minimo
  const minValue = (value: any, min: number): boolean => {
    const numberValue = Number.parseFloat(`${value}`)
    if (numberValue < min) return false
    return true
  }

  return {
    validateField: {
      isRequired,
      onlyLetters,
      isInt,
      minLength,
      maxLength,
      isEmail,
      isPhoneNumber,
      isPassword,
      isEqual,
      isFloat,
      minValue,
    },
  }
}

export default useFieldValidator
