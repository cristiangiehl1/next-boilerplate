'use client'

import { useQuery } from '@tanstack/react-query'

import { getPosts } from './getPosts'

export function Posts() {
  const { data } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  })

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data?.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  )
}
