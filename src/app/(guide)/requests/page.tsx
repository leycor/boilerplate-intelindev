import { getAllPost } from '@/api/requests/requestFetch'
import RequestPage from '@/components/client-side/requests/RequestPage'

export default async function Requests() {
  const posts = await getAllPost()
  return <RequestPage posts={posts} />
}
