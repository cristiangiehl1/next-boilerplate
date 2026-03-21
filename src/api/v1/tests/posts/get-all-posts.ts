import type { Post } from '@/app/api/v1/tests/posts/route'
import { api } from '@/lib/ky/ky'

export async function getAllPosts({ signal }: { signal?: AbortSignal }) {
  const res = await api.get<Post[]>('v1/tests/posts', { signal })
  const data = await res.json()
  return data
}
