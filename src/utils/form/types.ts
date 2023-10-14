import { type IValidationsType } from './validations/types'

export enum TYPE_INPUT {
  CHECKBOX = 'checkbox',
  DATE = 'date',
  EMAIL = 'email',
  IMAGE = 'image',
  NUMBER = 'number',
  PASSWORD = 'password',
  RANGE = 'range',
  TEL = 'tel',
  TEXT = 'text',
  SELECT = 'select',
  ASYNC_SELECT = 'async-select',
  TEXT_AREA = 'text-area',
  MONTH = 'month',
  RADIO = 'month',
}

export interface IFormInput {
  type: TYPE_INPUT
  name: string
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement>
  value?: any
  validations?: IValidationsType
  isRequired?: boolean
  showError?: boolean
  label?: string
  placeholder?: string
  description?: string[]
  disabled?: boolean
  statusCheck?: boolean
  withDebounce?: boolean
  statusDebounce?: boolean
  selectOption?: Array<{ value: number | string; label: string }>
}
