import Link from 'next/link'
import FormLogin from './components/FormLogin'

async function miFuncion() {
  await new Promise<void>(resolve => {
    setTimeout(() => {
      console.log("La promesa se ha ejecutado después de 3 segundos");
      resolve();
    }, 3000);
  });
}


const LoginPage = async () => {
  console.log('ME EJECUTÉ AAAAAAAAAAAAA')
  await miFuncion()

  return (
    <div className="w-full flex flex-col gap-3 justify-center items-center">
      <p className="text-center">Company Name</p>
      <FormLogin />
      <div className="flex justify-between flex-wrap w-full md:w-100 px-3">
        <Link href={'/admin'}>Registrar</Link>
        <Link href={'/'}>Ir al menú</Link>
      </div>
    </div>
  )
}

export default LoginPage
