import type { Metadata } from 'next'

import { PostsList } from '@/components/pages/tests/posts/posts-list'

export const metadata: Metadata = {
  title: 'Posts',
}

export default async function PostsPage() {
  return (
    <div className='bg-background flex min-h-screen w-full flex-col gap-4 p-4'>
      <h1>Posts</h1>
      <PostsList />
    </div>
  )
}
