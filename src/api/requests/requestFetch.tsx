import { type IGetAllPosts } from './types'

export async function getAllPost(): Promise<IGetAllPosts[]> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return await res.json()
}
