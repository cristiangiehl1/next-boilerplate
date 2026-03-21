'use client'

import { useState } from 'react'

import { InfiniteScrollContainer } from '@/components/infinite-scroll-container'
import { cn } from '@/lib/utils'
import { useGetAllPostsInfinite } from '@/queries/posts/get-all-posts-query'

export function PostsInfiniteList() {
  // states
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null)

  // queries
  const {
    data,
    isLoading,
    isFetching,
    isError,
    error,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useGetAllPostsInfinite()

  // derived
  const posts = data?.pages.flatMap((page) => page.posts) || []

  // states handlers
  if (isLoading) return <p className='text-gray-500'>Carregando posts...</p>

  return (
    <div className='space-y-4'>
      {posts && posts.length > 0 && (
        <InfiniteScrollContainer
          onBottomReached={() => hasNextPage && !isFetching && fetchNextPage()}
          className='space-y-8'>
          {posts.map((post) => (
            <div
              key={post.id}
              className={cn(
                'cursor-pointer rounded border p-4 shadow',
                selectedPostId === post.id
                  ? 'bg-muted-foreground'
                  : 'hover:bg-muted'
              )}
              onClick={() => setSelectedPostId(post.id)}>
              <h2 className='text-lg font-bold'>{post.title}</h2>
              <p className='text-gray-600'>{post.content}</p>
              <p className='text-sm text-gray-400'>
                Autor: {post.author} | Criado em: {post.createdAt}
              </p>
            </div>
          ))}
          {isFetchingNextPage && (
            <div className='my-4 flex justify-center'>
              Carregando mais posts...
            </div>
          )}
        </InfiniteScrollContainer>
      )}
      {!isError && !posts.length && (
        <div className='text-center'>Nenhum posts ainda.</div>
      )}
      {isError && (
        <p className='text-red-500'>Erro ao carregar posts: {String(error)}</p>
      )}
    </div>
  )
}
