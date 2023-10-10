'use client'
import Link from 'next/link'
import { Button } from '@nextui-org/button'
import { CustomButton, MainTitle } from './styles'
// const loaderComponent = new Promise( resolve => setTimeout(resolve,3000))

export default async function Home() {
  // await loaderComponent
  return (
    <main className="flex flex-col gap-3 justify-center items-center min-h-screen">
      <MainTitle>Home Page</MainTitle>
      <Link href={'/admin'} className="font-bold">
        Panel Admin
      </Link>
      <Link href={'/login'} className="font-bold">
        Login
      </Link>
      <div>{/* de lado cliente */}</div>
      <CustomButton isSubmit={true}>Other CLick me</CustomButton>
      <Button onClick={() => console.log('hola mundo')}>Click Me</Button>
    </main>
  )
}
