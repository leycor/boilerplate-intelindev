export enum MESSAGE_ERROR {
  ONLY_LETTERS = `can only contain characters from ('a'-'z')`,
  IS_REQUIRED = 'is required',
  IS_INT = `can only contain integer values`,
  IS_FLOAT = `can only contain float values`,
  IS_INVALID = 'is invalid',
  MIN_LENGTH = 'the minimum number of characters accepted is',
  MAX_LENGTH = 'the maximum number of characters accepted is',
  NOT_RULES = `doesn't follow the rules`,
  NOT_MATCH = `does not match`,
  MINOR_TO = `the minimum value is`,
}

export interface IValidationState {
  state: boolean
  fieldName: string
  errors: string[]
}

export interface IValidationsType {
  isRequired?: boolean
  onlyLetters?: boolean
  isInt?: boolean
  isFloat?: boolean
  minLength?: number
  maxLength?: number
  isEmail?: boolean
  isPhoneNumber?: boolean
  isPassword?: boolean
  isEqual?: { firstValue: string; secondValue: string }
  minValue?: string | number
}

// Interfaces para componentes
export interface IInputValidations {
  validateTo: IValidationsType | undefined
  value?: ((string | number) & (string | number | readonly string[])) | undefined | null
  name: string
}
