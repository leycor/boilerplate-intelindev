'use client'

import React from 'react'
import { type IPost } from '../types'
import { Button } from '@nextui-org/button';

const PostCard = ({ post }: { post: IPost }) => {
  const [state, setState] = React.useState(0)

  const handleClick = (post: IPost) => {
    console.log(post)
    setState(state + 1)
  }
  return (
    <div className="">
      <h3>
        {post.id}. {post.title}
      </h3>
      <p>{post.body}</p>
      <Button onClick={() => handleClick(post)} className=" text-white cursor-pointer">Click Here</Button>
    </div>
  )
}

export default PostCard
