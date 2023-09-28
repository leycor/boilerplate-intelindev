import PostCard from './components/PostCard'
import { type IPost } from './types'

const loadPost = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data: IPost[] = await res.json()
  return data
}

const PostPage = async () => {
  const posts = await loadPost()
  console.log('Me ejecuté pai')
  return (
    <div className="flex flex-col gap-3">
      {posts.map(post => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  )
}

export default PostPage
