'use client'

import { useState } from 'react'

import { cn } from '@/lib/utils'
import { useGetAllPosts } from '@/queries/posts/get-all-posts-query'

export function PostsList() {
  // states
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null)

  // queries
  const { data, isLoading, isError, error } = useGetAllPosts()

  if (isLoading) return <p className='text-gray-500'>Carregando posts...</p>

  return (
    <div className='space-y-4'>
      {selectedPostId && (
        <div className='mt-4 border-l-4 border-blue-500 bg-blue-50 p-4'>
          <p>Você selecionou o post ID: {selectedPostId}</p>
        </div>
      )}
      {data?.map((post) => (
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
      {isError && (
        <p className='text-red-500'>Erro ao carregar posts: {String(error)}</p>
      )}
    </div>
  )
}
