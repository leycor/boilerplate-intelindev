import { changeDataType } from './changeDataType'
import { type IOnchangeInAutoSelect, type IOnchange } from './types'

export const onChangeInputForm = ({ e, stateForm, setStateForm, fieldsToChange }: IOnchange) => {
  const inputValue = e?.target.value
  const inputName = e?.target.name
  const newValue = changeDataType({
    inputName,
    inputValue,
    dataList: fieldsToChange ?? [],
  })
  setStateForm({ ...stateForm, [inputName as keyof string]: newValue })
}

export const onChangeAutoSelectForm = ({
  e,
  stateForm,
  setStateForm,
  fieldsToChange,
}: IOnchangeInAutoSelect) => {
  const inputValue = e?.value
  const inputName = e?.name
  const newValue = changeDataType({
    inputName,
    inputValue: `${inputValue}`,
    dataList: fieldsToChange ?? [],
  })
  setStateForm({ ...stateForm, [inputName as keyof string]: newValue })
}
