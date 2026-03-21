import type { PaginationParams } from '@/@types/pagination'
import type { PostsPaginatedResponse } from '@/app/api/v1/tests/posts/paginated/route'
import { api } from '@/lib/ky/ky'

export async function getAllPostsPaginated(
  params: PaginationParams,
  signal?: AbortSignal
) {
  const res = await api.get<PostsPaginatedResponse>(
    'v1/tests/posts/paginated',
    {
      searchParams: params,
      signal,
    }
  )
  const data = await res.json()
  return data
}
