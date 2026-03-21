import type { InfiniteScrollPostsResponse } from '@/app/api/v1/tests/posts/infinite/route'
import { api } from '@/lib/ky/ky'

export async function getAllPostsInfinite(
  params: { cursor?: number },
  signal?: AbortSignal
) {
  const res = await api.get<InfiniteScrollPostsResponse>(
    'v1/tests/posts/infinite',
    {
      searchParams: params,
      signal,
    }
  )
  const data = await res.json()
  return data
}
