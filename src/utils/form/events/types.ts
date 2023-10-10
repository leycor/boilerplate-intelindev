export enum TYPE_DATA_INPUT {
  INT = 'int',
  FLOAT = 'float',
  STRING = 'string',
}
export interface ITypeDataInput {
  name: string
  type: TYPE_DATA_INPUT
}

export interface IChangeDataTypeForm {
  inputName: string | undefined
  inputValue: string | undefined
  dataList: ITypeDataInput[]
}

export interface IEventAutoSelect {
  value: number | string
  label: string
  name: string
}

export interface IOnchange {
  e?: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  stateForm: any
  setStateForm: any
  fieldsToChange?: ITypeDataInput[]
}
export interface IOnchangeInAutoSelect {
  e?: IEventAutoSelect | React.ChangeEvent<HTMLInputElement | HTMLSelectElement> | any
  stateForm: any
  setStateForm: any
  fieldsToChange?: ITypeDataInput[]
}
