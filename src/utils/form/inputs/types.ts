import { type TYPE_INPUT } from '../types'
import { type IValidationsType } from '../validations/types'

export interface IInputForm {
  key?: string
  type: TYPE_INPUT
  name: string
  value?: any
  isValid?: boolean
  isRequired?: boolean
  showError?: boolean
  placeholder?: string
  label?: string
  description?: string[]
  validations?: IValidationsType
  isFocus?: boolean
  selectOption?: Array<{ value: number | string; label: string }>
  statusCheck?: boolean
  disabled?: boolean
  withDebounce?: boolean
  statusDebounce?: boolean
  onChange: any // React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement> | (React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement> & React.ChangeEventHandler<HTMLTextAreaElement>)
}

export interface IAutoSelect {
  isRequired?: boolean
  disabled?: boolean
  isValid?: boolean
  isFocus?: boolean
}
