'use client'
import { type IInputForm } from './types'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/20/solid'
import { TYPE_INPUT } from '../types'
import {
  Checkbox,
  Input,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
  Textarea,
  cn,
} from '@nextui-org/react'
import { InputValidations } from '../validations/InputValidations'
import React from 'react'
import { FormContainer } from './styles'

const LIST_NORMAL_INPUT = [
  TYPE_INPUT.TEXT,
  TYPE_INPUT.EMAIL,
  TYPE_INPUT.PASSWORD,
  TYPE_INPUT.NUMBER,
  TYPE_INPUT.TEL,
]

const InputForm = ({
  type = TYPE_INPUT.TEXT,
  placeholder = '',
  label,
  name,
  validations = {},
  isRequired = false,
  description,
  selectOption = [],
  value,
  statusCheck,
  disabled,
  withDebounce = false,
  statusDebounce = false,
  onChange,
  showError,
}: IInputForm) => {
  // const [typeInput, setTypeInput] = React.useState(type)
  const [isVisible, setIsVisible] = React.useState(false)
  const [isFocus, setIsFocus] = React.useState(false)
  const evaluateField: boolean =
    Object.keys(validations).length !== 0
      ? InputValidations({
          validateTo: validations,
          value,
          name,
        }).state
      : false
  const errorMesage = InputValidations({
    validateTo: validations,
    value,
    name,
  }).errors
  const toggleVisibility = () => setIsVisible(!isVisible)
  const endContent = () => {
    return (
      <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
        {isVisible ? (
          <EyeSlashIcon className="h-5 w-5 text-gray-500" />
        ) : (
          <EyeIcon className="h-5 w-5 text-gray-500" />
        )}
      </button>
    )
  }

  const allDescription = description?.join(' | ') ?? ''

  // ****************** INPUT ******************************* //
  const normalInput = () => {
    return (
      <FormContainer>
        <Input
          isRequired={isRequired}
          labelPlacement="inside"
          radius="sm"
          variant="faded"
          size="sm"
          name={name}
          disabled={disabled}
          type={isVisible ? TYPE_INPUT.TEXT : type}
          label={label}
          placeholder={placeholder}
          description={allDescription}
          value={value}
          onChange={onChange}
          errorMessage={showError && isFocus && errorMesage[0]}
          onFocus={() => {
            setIsFocus(true)
          }}
          isInvalid={showError && isFocus && !evaluateField}
          // color={evaluateField ? 'success' : 'default'}
          {...(type === TYPE_INPUT.PASSWORD && { endContent: endContent() })}
          classNames={{
            inputWrapper: [
              `${evaluateField ? 'border-1 border-green-500' : 'border-1 border-gray-400'}`,
              'bg-gray-100 shadow-md',
            ],
          }}
        />
      </FormContainer>
    )
  }

  const selectInput = () => {
    return (
      <FormContainer>
        <Select
          isRequired={isRequired}
          labelPlacement="inside"
          description={allDescription}
          radius="sm"
          variant="faded"
          size="sm"
          name={name}
          isDisabled={disabled}
          label={label}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          errorMessage={showError && isFocus && errorMesage[0]}
          onFocus={() => {
            setIsFocus(true)
          }}
          isInvalid={showError && isFocus && !evaluateField}
          classNames={{
            trigger: [
              `${evaluateField ? 'border-1 border-green-500' : 'border-1 border-gray-400'}`,
            ],
            base: [`bg-gray-100 shadow-md rounded-lg`],
          }}
        >
          {selectOption.map(option => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </Select>
      </FormContainer>
    )
  }

  const textAreaInput = () => {
    return (
      <Textarea
        isRequired={isRequired}
        labelPlacement="inside"
        description={allDescription}
        radius="sm"
        variant="faded"
        size="sm"
        name={name}
        isDisabled={disabled}
        label={label}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        errorMessage={showError && isFocus && errorMesage[0]}
        onFocus={() => {
          setIsFocus(true)
        }}
        isInvalid={showError && isFocus && !evaluateField}
        classNames={{
          inputWrapper: [
            `${evaluateField ? 'border-1 border-green-500' : 'border-1 border-gray-400'}`,
            'bg-gray-100 shadow-md',
          ],
        }}
      />
    )
  }

  const checkInput = () => {
    return (
      <Checkbox
        radius="sm"
        size="sm"
        name={name}
        isDisabled={disabled}
        isSelected={statusCheck}
        onValueChange={onChange}
        onFocus={() => {
          setIsFocus(true)
        }}
        isInvalid={showError && isFocus && !evaluateField}
      >
        {label}
      </Checkbox>
    )
  }

  const radioInput = () => {
    return (
      <RadioGroup
        label={label}
        size="sm"
        isDisabled={disabled}
        orientation="horizontal"
        value={value}
        onValueChange={onChange}
        className="items-center"
      >
        {selectOption.map(option => (
          <Radio
            size="sm"
            key={option.value}
            value={`${option.value}`}
            classNames={{
              base: cn(
                'inline-flex m-0 bg-content2 hover:bg-content3 items-center justify-between',
                'flex-row-reverse w-full md:w-  cursor-pointer rounded-lg gap-4 p-2 border-2 border-transparent',
                'data-[selected=true]:border-primary',
              ),
            }}
          >
            {option.label}
          </Radio>
        ))}
      </RadioGroup>
    )
  }

  if (LIST_NORMAL_INPUT.includes(type)) return normalInput()
  if (type === TYPE_INPUT.SELECT) return selectInput()
  if (type === TYPE_INPUT.TEXT_AREA) return textAreaInput()
  if (type === TYPE_INPUT.CHECKBOX) return checkInput()
  if (type === TYPE_INPUT.RADIO) return radioInput()
  // if (type === TYPE_INPUT.ASYNC_SELECT) return selectWithSearch()
  return normalInput()

  //   switch (type) {

  //     case TYPE_INPUT.ASYNC_SELECT:
  //       return printAutoSelect()

  //     case TYPE_INPUT.CHECKBOX:
  //       return printCheckInput()

  //     default:
  //       return printInput()
  //   }
}

export default InputForm
