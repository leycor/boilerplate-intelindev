'use client'
import React from 'react'
import useLoginForm from '../form/form'
import { deleteData, getData, saveData } from '@/utils/localStorage'
import { type IRememberMeStorage } from '../types'
import { MainContainerAuth } from '../styles'
// import { Button } from '@nextui-org/react'

const FormLogin = () => {
  const [buttonState, setButtonState] = React.useState(false)
  const [rememberMe, setRememberMe] = React.useState(false)
  console.log('test youyr main 2')
  console.log('de what')

  const { loginForm } = useLoginForm()

  //   const handleRememberAccount = () => {
  //     setRememberMe(!rememberMe)
  //   }

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (rememberMe) {
      const email = loginForm.fields.email
      const password = loginForm.fields.password
      saveData('accountRemember', { email, password, rememberMe })
    } else {
      deleteData('accountRemember')
    }

    console.log(loginForm.Form.isValidate())

    if (loginForm.Form.isValidate()) {
      console.log('Accion para loguear')
      setButtonState(buttonState)
    }
  }

  React.useEffect(() => {
    const rememberMeStorage: IRememberMeStorage | null = getData('accountRemember')
    if (rememberMeStorage) {
      loginForm.setFields({
        ...loginForm.fields,
        email: rememberMeStorage.email,
        password: rememberMeStorage.password,
      })
      setRememberMe(rememberMeStorage.rememberMe)
    }
  }, [])

  return (
    <MainContainerAuth>
      <form
        onSubmit={e => {
          handleSubmitForm(e)
        }}
        className="flex flex-col gap-5"
      >
        <p className="text-center">Sign in with credentials</p>
        <div className="flex flex-col gap-4">{loginForm.Form.getFormMap()}</div>
        <button className="p-2 bg-black text-white uppercase rounded-md font-bold">SIGN IN</button>
      </form>
    </MainContainerAuth>
  )
}

export default FormLogin
