import Link from 'next/link'
import { Button } from '@nextui-org/button';

export default async function Home() {
  return (
    <main className="flex flex-col gap-3 justify-center items-center min-h-screen">
      <p>Home Page</p>
      <Link href={'/admin'} className="font-bold">
        Panel Admin
      </Link>
      <Button>Click Me</Button>
    </main>
  )
}
