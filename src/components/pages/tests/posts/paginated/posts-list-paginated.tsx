'use client'

import { useState } from 'react'

import { Pagination } from '@/components/pagination'
import { cn } from '@/lib/utils'
import { useGetAllPostsPaginated } from '@/queries/posts/get-all-posts-query'

export function PostsListPaginated() {
  // states
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null)
  const [page, setPage] = useState(1)

  // queries
  const { data, isLoading, isFetching, isError, error } =
    useGetAllPostsPaginated({ page })

  if (isLoading) return <p className='text-gray-500'>Carregando posts...</p>

  return (
    <div className='space-y-4'>
      <header className='flex items-center gap-2'>
        <h1>Posts</h1>
        {isFetching && <p className='text-sm text-gray-400'>Atualizando...</p>}
      </header>
      {selectedPostId && (
        <div className='mt-4 border-l-4 border-blue-500 p-4'>
          <p>Você selecionou o post ID: {selectedPostId}</p>
        </div>
      )}
      {data && data.posts.length > 0 && (
        <div className='space-y-8'>
          {data.posts.map((post) => (
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

          <Pagination
            currentPage={page}
            totalPages={data.pagination.totalPages}
            onPageChange={(page) => setPage(page)}
            disabled={isFetching}
          />
        </div>
      )}

      {isError && (
        <p className='text-red-500'>Erro ao carregar posts: {String(error)}</p>
      )}
    </div>
  )
}
