'use client'
import {
  ContainerColumn,
  ContainerColumnCenter,
  ContainerRowCenter,
} from '@/components/ui/containers'
import { TitleSectionUppercase } from '@/components/ui/titles'
import Link from 'next/link'

const HomePage = () => {
  return (
    <ContainerColumn>
      <ContainerColumnCenter>
        <TitleSectionUppercase>BoilerPlate IntelindDev</TitleSectionUppercase>
        <ContainerRowCenter>
          <Link href={'/forms'} prefetch={false}>
            Forms
          </Link>
          <Link href={'/requests'} prefetch={false}>
            Requests
          </Link>
          <Link href={'/about'} prefetch={false}>
            About
          </Link>
        </ContainerRowCenter>
      </ContainerColumnCenter>
    </ContainerColumn>
  )
}

export default HomePage
