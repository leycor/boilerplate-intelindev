'use client'
import { Input } from '@nextui-org/react'

const LoginPage = () => {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-center">Company Name</p>
      <div className="flex flex-col gap-3">
        <Input
          labelPlacement='outside'
          radius="sm"
          variant="faded"
          size="md"
          type="email"
          label="Correo electronico"
          placeholder="Ingresa tu correo electronico"
          classNames={{
            inputWrapper: [
              "border-1 border-gray-400",
              "bg-gray-100 shadow-md",
            ],
          }}
  
        />
        <Input
          labelPlacement='outside'
          radius="sm"
          variant="faded"
          size="md"
          type="password"
          label="Contraseña"
          placeholder="Ingresa tu contraseña"
          classNames={{
            inputWrapper: [
              "border-1 border-gray-400",
              "bg-gray-100 shadow-md",
            ],
          }}
  
        />
      </div>
    </div>
  )
}

export default LoginPage
