import { type IGetAllPosts } from './types'
export const dynamic = 'force-dynamic'

export async function getAllPost(): Promise<IGetAllPosts[]> {
  await new Promise( resolve => setTimeout(resolve,3000))
  console.log('me llamé')
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    cache: 'no-store',
    next: { revalidate: 30 },
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return await res.json()
}
