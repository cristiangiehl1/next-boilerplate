import type { Metadata } from 'next'

import { PostsInfiniteList } from '@/components/pages/tests/posts/infinite/posts-list-infinite'

export const metadata: Metadata = {
  title: 'Posts',
}

export default async function PostsInfinitePage() {
  return (
    <div className='bg-background flex min-h-screen w-full flex-col gap-4 p-4'>
      <h1>Posts</h1>
      <PostsInfiniteList />
    </div>
  )
}
