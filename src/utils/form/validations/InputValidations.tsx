'use client'

import useFieldValidator from '../hooks/useFieldValidator'
import { MESSAGE_ERROR, type IInputValidations, type IValidationState } from './types'

const { validateField } = useFieldValidator()

export const InputValidations = ({
  validateTo = {},
  value,
  name,
}: IInputValidations): IValidationState => {
  // Lista de errores del input
  const errorList: IValidationState = {
    state: false,
    fieldName: name,
    errors: [],
  }

  // Actualiza la lista de errores, si un campo ya cumplió con una validación y se encuentra dentro de la lista, se deberá eliminar.
  const updateErrorList = (messageRemove: string) => {
    const newList = errorList.errors.filter(element => element !== messageRemove)
    errorList.errors = newList
  }

  if (validateTo.isRequired) {
    const isValid = validateField.isRequired(value)
    const message = `${name}, ${MESSAGE_ERROR.IS_REQUIRED}`
    if (!isValid && !errorList.errors.includes(message)) {
      errorList.errors.push(message)
    } else {
      updateErrorList(message)
    }
  }

  if (validateTo.onlyLetters) {
    const isValid = validateField.onlyLetters(value)
    const message = `${name}, ${MESSAGE_ERROR.ONLY_LETTERS}`
    if (!isValid && !errorList.errors.includes(message)) {
      errorList.errors.push(message)
    } else {
      updateErrorList(message)
    }
  }

  if (validateTo.isInt) {
    const isValid = validateField.isInt(value)
    const message = `${name}, ${MESSAGE_ERROR.IS_INT}`
    if (!isValid && !errorList.errors.includes(message)) {
      errorList.errors.push(message)
    } else {
      updateErrorList(message)
    }
  }

  if (validateTo.isFloat) {
    const isValid = validateField.isFloat(value)
    const message = `${name}, ${MESSAGE_ERROR.IS_FLOAT}`
    if (!isValid && !errorList.errors.includes(message)) {
      errorList.errors.push(message)
    } else {
      updateErrorList(message)
    }
  }

  if (validateTo.minLength) {
    const isValid =
      !validateTo.isRequired && value === ''
        ? true
        : validateField.minLength(value, validateTo.minLength)
    const message = `${name}, ${MESSAGE_ERROR.MIN_LENGTH} ${validateTo.minLength}`
    if (!isValid && !errorList.errors.includes(message)) {
      errorList.errors.push(message)
    } else {
      updateErrorList(message)
    }
  }

  if (validateTo.maxLength) {
    const isValid = validateField.maxLength(value, validateTo.maxLength)
    const message = `${name}, ${MESSAGE_ERROR.MAX_LENGTH} ${validateTo.maxLength}`
    if (!isValid && !errorList.errors.includes(message)) {
      errorList.errors.push(message)
    } else {
      updateErrorList(message)
    }
  }

  if (validateTo.isEmail) {
    const isValid = validateField.isEmail(value)
    const message = `${name}, ${MESSAGE_ERROR.IS_INVALID}`
    if (!isValid && !errorList.errors.includes(message)) {
      errorList.errors.push(message)
    } else {
      updateErrorList(message)
    }
  }

  if (validateTo.isPhoneNumber) {
    const isValid = validateField.isPhoneNumber(value)
    const message = `${name}, ${MESSAGE_ERROR.IS_INVALID}`
    if (!isValid && !errorList.errors.includes(message)) {
      errorList.errors.push(message)
    } else {
      updateErrorList(message)
    }
  }

  if (validateTo.isPassword) {
    const isValid = validateField.isPassword(value)
    const message = `${name}, ${MESSAGE_ERROR.NOT_RULES}`
    if (!isValid && !errorList.errors.includes(message)) {
      errorList.errors.push(message)
    } else {
      updateErrorList(message)
    }
  }

  if (validateTo.isEqual) {
    const { firstValue, secondValue } = validateTo.isEqual
    const isValid = validateField.isEqual(firstValue, secondValue)
    const message = `${name}, ${MESSAGE_ERROR.NOT_MATCH}`
    if (!isValid && !errorList.errors.includes(message)) {
      errorList.errors.push(message)
    } else {
      updateErrorList(message)
    }
  }

  if (validateTo.minValue) {
    const isValid = validateField.minValue(value, +validateTo.minValue)
    const message = `${name}, ${MESSAGE_ERROR.MINOR_TO} ${validateTo.minValue}`
    if (!isValid && !errorList.errors.includes(message)) {
      errorList.errors.push(message)
    } else {
      updateErrorList(message)
    }
  }

  if (errorList.errors.length === 0) {
    errorList.state = true
    return errorList
  } else {
    return errorList
  }
}
