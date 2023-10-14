import { changeDataType } from './changeDataType'
import { type IOnchangeCheckBox, type IOnchange, type IOnchangeRadio } from './types'
import validator from 'validator'

export const onChangeInputForm = ({ e, stateForm, setStateForm, fieldsToChange }: IOnchange) => {
  console.log('malo', e)
  const inputValue = e?.target?.value
  const inputName = e?.target?.name
  const inputType = e?.target?.type
  const newValue = changeDataType({
    inputName,
    inputValue,
    inputType,
    dataList: fieldsToChange ?? [],
  })
  setStateForm({ ...stateForm, [inputName as keyof string]: newValue })
}

export const onChangeCheckBox = ({
  inputName,
  checkBoxStatus,
  stateForm,
  setStateForm,
}: IOnchangeCheckBox) => {
  setStateForm({ ...stateForm, [inputName]: !checkBoxStatus })
}

export const onChangeRadio = ({
  inputName,
  inputValue,
  stateForm,
  setStateForm,
}: IOnchangeRadio) => {
  let newValue
  const evaluateValue = Number.parseFloat(`${inputValue}`)
  if (!isNaN(evaluateValue)) {
    if (validator.isInt(`${evaluateValue}`)) {
      newValue = Number.parseInt(`${inputValue}`)
    }
    if (validator.isFloat(`${evaluateValue}`)) {
      newValue = Number.parseFloat(`${inputValue}`)
    }
  } else {
    newValue = `${inputValue}`
  }

  console.log(inputValue)
  setStateForm({ ...stateForm, [inputName]: newValue })
}

// export const onChangeAutoSelectForm = ({
//   e,
//   stateForm,
//   setStateForm,
//   fieldsToChange,
// }: IOnchangeInAutoSelect) => {
//   const inputValue = e?.value
//   const inputName = e?.name
//   const newValue = changeDataType({
//     inputName,
//     inputValue: `${inputValue}`,
//     dataList: fieldsToChange ?? [],
//   })
//   setStateForm({ ...stateForm, [inputName as keyof string]: newValue })
// }
