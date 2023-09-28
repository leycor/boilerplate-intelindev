'use client'

import React from 'react'
import { type IPost } from '../types'

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
      <button onClick={() => handleClick(post)} className="bg-black text-white cursor-pointer">Click Here</button>
    </div>
  )
}

export default PostCard
