'use client'
import useFormGuide from '@/app/(guide)/forms/createForm/form'
import {
  ContainerColumn,
  ContainerColumnCenter,
  ContainerRowCenter,
} from '@/components/ui/containers'
import { NOTIFY } from '@/utils/notify'
import React from 'react'
import { FormContainerGuide, FormTitle } from './styles'
import { Button } from '@nextui-org/react'
import Link from 'next/link'

const FormPage = () => {
  const [buttonState, setButtonState] = React.useState(false)

  const { formGuide } = useFormGuide()

  const handleSubmitForm = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault()

    if (formGuide.Form.isValidate()) {
      NOTIFY.SUCCESS('Formulario enviado correctamente!')
      console.log(formGuide.fields)
      setButtonState(buttonState)
    }
  }

  return (
    <ContainerColumnCenter gap="lg" className="p-3">
      <FormTitle>Lista de Inputs</FormTitle>
      <FormContainerGuide
        onSubmit={e => {
          handleSubmitForm(e)
        }}
      >
        <FormTitle>Sign in with credentials</FormTitle>
        <ContainerColumn gap="md">{formGuide.Form.getFormMap()}</ContainerColumn>
        <Button
          onClick={e => handleSubmitForm(e)}
          radius="sm"
          className="bg-black text-white font-bold"
        >
          Sign in
        </Button>
      </FormContainerGuide>
      <ContainerRowCenter>
        <Link href={'/'} prefetch={false}>
          Home
        </Link>
        <Link href={'/requests'} prefetch={false}>
          Requests
        </Link>
        <Link href={'/about'} prefetch={false}>
          About
        </Link>
      </ContainerRowCenter>
    </ContainerColumnCenter>
  )
}

export default FormPage
