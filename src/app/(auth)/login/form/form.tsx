'use client'
import { type IFormInput, TYPE_INPUT } from '@/utils/form/types'
import React from 'react'
import { formLoginInitValue } from './initValue'
import { onChangeInputForm } from '@/utils/form/events'
import CustomForm from '@/utils/form'

const useLoginForm = () => {
  const [fields, setFields] = React.useState(formLoginInitValue)

  const data: IFormInput[] = [
    {
      type: TYPE_INPUT.EMAIL,
      isRequired: true,
      name: 'email',
      label: 'Email',
      placeholder: 'Enter your email',
      validations: { isEmail: true, isRequired: true },
      value: fields.email,
      onChange: e => {
        onChangeInputForm({
          stateForm: fields,
          setStateForm: setFields,
          e,
        })
      },
    },

    {
      type: TYPE_INPUT.SELECT,
      isRequired: true,
      name: 'sex',
      label: 'Sex',
      placeholder: 'Select your sex',
      validations: { isRequired: true },
      value: fields.sex,
      selectOption: [
        { value: 0, label: 'Male' },
        { value: 1, label: 'Female' },
      ],
      onChange: e => {
        onChangeInputForm({
          stateForm: fields,
          setStateForm: setFields,
          e,
        })
      },
    },
    {
      type: TYPE_INPUT.PASSWORD,
      isRequired: true,
      name: 'password',
      label: 'Password',
      placeholder: 'Enter your Password',
      validations: { isRequired: true },
      value: fields.password,
      onChange: e => {
        onChangeInputForm({
          stateForm: fields,
          setStateForm: setFields,
          e,
        })
      },
    },
    {
      type: TYPE_INPUT.TEXT_AREA,
      isRequired: true,
      name: 'message',
      label: 'Message',
      placeholder: 'Enter your message',
      validations: { isRequired: true },
      value: fields.message,
      onChange: e => {
        onChangeInputForm({
          stateForm: fields,
          setStateForm: setFields,
          e,
        })
      },
    },
  ]

  const Form = CustomForm(data)

  return {
    loginForm: {
      fields,
      setFields,
      Form,
    },
  }
}

export default useLoginForm
