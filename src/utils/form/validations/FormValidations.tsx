'use client'
import { NOTIFY } from '../../notify'
import { type IFormInput } from '../types'
import { InputValidations } from './InputValidations'

export const FormValidations = (form: IFormInput[]) => {
  let errors: string[] = []

  for (const field of form) {
    const checkField = InputValidations({
      validateTo: field.validations,
      name: field.name,
      value: field.value,
    })
    if (!checkField.state) {
      errors = [...errors, ...checkField.errors]
    }
  }

  if (errors.length !== 0) {
    NOTIFY.CUSTOM(errors)
    return false
  } else {
    return true
  }
}
