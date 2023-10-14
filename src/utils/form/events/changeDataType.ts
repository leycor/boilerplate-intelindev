import { TYPE_DATA_INPUT, type IChangeDataTypeForm } from './types'
import validator from 'validator'

const INPUT_TYPE_TEXT = ['text', 'password', 'email', 'tel', 'date']

export const changeDataType = ({
  inputName,
  inputValue,
  inputType,
  dataList,
}: IChangeDataTypeForm) => {
  const searchData = dataList.find(data => data.name === inputName)

  // Captura los tipo string
  if (INPUT_TYPE_TEXT.includes(inputType as string)) {
    return inputValue
  }

  // Captura los tipo numeros
  if (inputType === 'number') {
    if (validator.isInt(inputValue as string)) {
      return Number.parseInt(inputValue as string)
    } else {
      return Number.parseFloat(inputValue as string)
    }
  }

  // Evalua los undefined para establecer un tipo

  if (inputType === undefined) {
    const evaluate = Number.parseFloat(inputValue as string)
    if (!isNaN(evaluate)) {
      if (validator.isInt(`${evaluate}`)) return Number.parseInt(inputValue as string)
      if (validator.isFloat(`${evaluate}`)) return Number.parseFloat(inputValue as string)
    } else {
      return inputValue
    }
  }
  if (!searchData) {
    // return string
    return inputValue
  }

  if (!inputValue) {
    return ''
  }

  // return int
  if (searchData.type === TYPE_DATA_INPUT.INT) {
    return Number.parseInt(inputValue)
  }

  // return float
  if (searchData.type === TYPE_DATA_INPUT.FLOAT) {
    return Number.parseFloat(inputValue)
  }
}
