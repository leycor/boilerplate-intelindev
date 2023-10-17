'use client'
import { ContainerRowCenter } from '@/components/ui/containers'
import Link from 'next/link'

const AboutPage = () => {
  return (
    <div className="flex flex-col gap-3 w-full md:w-100 p-3 items-center">
      <p className="font-bold text-sm">
        {' '}
        Next.js + Tailwind CSS + Styled-components with Twin Macro Boilerplate
      </p>
      <p className="">
        Este boilerplate es una base sólida y versátil para desarrollar aplicaciones web modernas y
        atractivas. Combina varias tecnologías de vanguardia para proporcionar una experiencia de
        desarrollo eficiente y una interfaz de usuario estilizada. Las principales características
        de este boilerplate incluyen
      </p>
      <div className="flex flex-wrap gap-2">
        <a href="https://nextjs.org/" target="_blank" className="text-blue-600" rel="noreferrer">
          Next 13 App Router
        </a>
        <a href="https://nextui.org/" target="_blank" className="text-blue-600" rel="noreferrer">
          NextUI
        </a>
        <a
          href="https://docs.pmnd.rs/zustand/getting-started/introduction"
          target="_blank"
          className="text-blue-600"
          rel="noreferrer"
        >
          Zustand
        </a>
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          className="text-blue-600"
          rel="noreferrer"
        >
          Tailwind CSS
        </a>
        <a
          href="https://styled-components.com/"
          target="_blank"
          className="text-blue-600"
          rel="noreferrer"
        >
          Styled-components
        </a>
        <a
          href="https://github.com/ben-rogerson/twin.macro"
          target="_blank"
          className="text-blue-600"
          rel="noreferrer"
        >
          Twin Macro
        </a>
        <a
          href="https://www.npmjs.com/package/react-toastify"
          target="_blank"
          className="text-blue-600"
          rel="noreferrer"
        >
          React-Toastify
        </a>
      </div>
      <p>
        Este boilerplate te proporciona una base sólida para desarrollar aplicaciones web modernas,
        con todas las herramientas necesarias para un desarrollo rápido y efectivo, junto con una
        interfaz de usuario atractiva. Puedes personalizarlo fácilmente para adaptarse a tus
        necesidades específicas y comenzar a construir tu aplicación sin perder tiempo en la
        configuración inicial. ¡Disfruta de la programación y la creación de proyectos excepcionales
        con esta potente combinación de tecnologías!
      </p>
      <a
        href="https://github.com/Intelindev/BoilerplateFrontEndNextJs"
        target="_blank"
        className="text-blue-600"
        rel="noreferrer"
      >
        Github
      </a>
      <ContainerRowCenter>
          <Link href={'/'} prefetch={false}>
            Home
          </Link>
          <Link href={'/requests'} prefetch={false}>
            Requests
          </Link>
          <Link href={'/forms'} prefetch={false}>
            Forms
          </Link>
        </ContainerRowCenter>
    </div>
  )
}

export default AboutPage
