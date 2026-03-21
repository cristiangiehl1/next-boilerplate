import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import type { Metadata } from 'next'

import { PostsListPaginated } from '@/components/pages/tests/posts/paginated/posts-list-paginated'
import { getQueryClient } from '@/lib/tanstack-query'
import { prefetchGetAllPosts } from '@/queries/posts/get-all-posts-query'

export const metadata: Metadata = {
  title: 'Posts',
}

export default async function PostsPaginatedPage() {
  const queryClient = getQueryClient()
  await prefetchGetAllPosts(queryClient, { page: 1 })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className='bg-background flex min-h-screen w-full flex-col gap-4 p-4'>
        <PostsListPaginated />
      </div>
    </HydrationBoundary>
  )
}
