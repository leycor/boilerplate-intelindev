'use client'
import { type IFormInput, TYPE_INPUT } from '@/utils/form/types'
import React from 'react'
import { onChangeCheckBox, onChangeInputForm, onChangeRadio } from '@/utils/form/events'
import CustomForm from '@/utils/form'
import { IVFormGuide } from './initValue'
import { type IPayloadFormsGuide } from '@/api/forms/types'
// import { convertDataList } from '@/utils/form/convertData'

const useFormGuide = () => {
  const [fields, setFields] = React.useState(IVFormGuide)

  const onChangeInputFormDefault = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    return onChangeInputForm({
      stateForm: fields,
      setStateForm: setFields,
      // fieldsToChange: convertDataList,
      e,
    })
  }

  const onChangeCheckBoxDefault = (name: keyof IPayloadFormsGuide) => {
    return onChangeCheckBox({
      stateForm: fields,
      setStateForm: setFields,
      checkBoxStatus: fields[name] as boolean,
      inputName: name,
    })
  }

  const onChangeRadioDefault = (value: string, name: keyof IPayloadFormsGuide) => {
    return onChangeRadio({
      stateForm: fields,
      setStateForm: setFields,
      inputValue: value,
      inputName: name,
    })
  }

  // const onChangeRadioDefault = () => {

  // }
  const data: IFormInput[] = [
    {
      type: TYPE_INPUT.TEXT,
      isRequired: true,
      name: 'text',
      label: 'Text',
      placeholder: 'Write any text',
      validations: { isRequired: true },
      value: fields.text,
      onChange: e => onChangeInputFormDefault(e),
    },

    {
      type: TYPE_INPUT.NUMBER,
      isRequired: true,
      name: 'number',
      label: 'Number',
      placeholder: 'Write any text',
      validations: { isRequired: true, minValue: '0' },
      value: fields.number,
      onChange: e => onChangeInputFormDefault(e),
    },
    {
      type: TYPE_INPUT.EMAIL,
      isRequired: true,
      name: 'email',
      label: 'Email',
      placeholder: 'Enter your email',
      validations: { isEmail: true, isRequired: true },
      value: fields.email,
      onChange: e => onChangeInputFormDefault(e),
    },
    {
      type: TYPE_INPUT.DATE,
      isRequired: true,
      name: 'date',
      label: 'Date',
      placeholder: 'Enter any date',
      validations: { isRequired: true },
      value: fields.date,
      onChange: e => onChangeInputFormDefault(e),
    },

    {
      type: TYPE_INPUT.SELECT,
      isRequired: true,
      name: 'select',
      label: 'Select',
      placeholder: 'Select your sex',
      validations: { isRequired: true },
      value: fields.select,
      selectOption: [
        { value: 1, label: 'Option 1' },
        { value: 2, label: 'Option 2' },
      ],
      onChange: e => onChangeInputFormDefault(e),
    },
    {
      type: TYPE_INPUT.PASSWORD,
      isRequired: true,
      name: 'password',
      label: 'Password',
      placeholder: 'Enter your Password',
      validations: { isRequired: true },
      value: fields.password,
      onChange: e => onChangeInputFormDefault(e),
    },
    {
      type: TYPE_INPUT.TEXT_AREA,
      isRequired: true,
      name: 'textArea',
      label: 'Text Area',
      placeholder: 'Write any text',
      validations: { isRequired: true },
      value: fields.textArea,
      onChange: e => onChangeInputFormDefault(e),
    },

    {
      type: TYPE_INPUT.CHECKBOX,
      name: 'checkBox',
      label: 'CheckBox',
      statusCheck: fields.checkBox,
      onChange: () => onChangeCheckBoxDefault('checkBox'),
    },
    {
      type: TYPE_INPUT.RADIO,
      name: 'radio',
      label: 'Radio',
      selectOption: [
        { value: 'a', label: 'Option 1' },
        { value: 'b', label: 'Option 2' },
        { value: 1.1, label: 'Option 3' },
      ],
      onChange: e => onChangeRadioDefault(e as unknown as string, 'radio'),
    },
  ]

  const Form = CustomForm(data)

  return {
    formGuide: {
      fields,
      setFields,
      Form,
    },
  }
}

export default useFormGuide
