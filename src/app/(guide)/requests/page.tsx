import { getAllPost } from '@/api/requests/requestFetch'
import RequestPage from '@/components/pages/requests/RequestPage'

export default async function Requests() {
  const posts = await getAllPost()
  return <RequestPage posts={posts} />
}
