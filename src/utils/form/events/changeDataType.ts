import { TYPE_DATA_INPUT, type IChangeDataTypeForm } from './types'

export const changeDataType = ({ inputName, inputValue, dataList }: IChangeDataTypeForm) => {
  const searchData = dataList.find(data => data.name === inputName)

  // return string
  if (!searchData) {
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
