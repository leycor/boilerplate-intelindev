'use client'

import { type IGetAllPosts } from '@/api/requests/types'
import { ContainerAllPosts } from './styles'
import { ContainerColumnCenter, ContainerRow, ContainerRowCenter } from '@/components/ui/containers'
import Link from 'next/link'
import { FormTitle } from '../forms/styles'

const RequestPage = ({ posts }: { posts: IGetAllPosts[] }) => {
  return (
    <ContainerColumnCenter gap="lg" className="p-3">
      <FormTitle>JsonPlaceHolder</FormTitle>
      <ContainerAllPosts>
        {posts.map(post => (
          <ContainerRow key={post.id} className="p-2">
            <p className="font-bold">
              {post.id}. {post.title}
            </p>
            <p>{post.body}</p>
          </ContainerRow>
        ))}
      </ContainerAllPosts>
      <ContainerRowCenter>
        <Link href={'/'} prefetch={false}>
          Home
        </Link>
        <Link href={'/forms'} prefetch={false}>
          Forms
        </Link>
        <Link href={'/about'} prefetch={false}>
          About
        </Link>
      </ContainerRowCenter>
    </ContainerColumnCenter>
  )
}

export default RequestPage
