import { dehydrate, Hydrate } from '@tanstack/react-query'
import type { Metadata } from 'next'

import { getQueryClient } from '@/lib/tanstack-query'

import { getPosts } from './getPosts'
import { Posts } from './posts'

export const metadata: Metadata = {
  title: 'TEST',
}

export default async function TestPage() {
  const queryClient = getQueryClient()

  const data = await queryClient.fetchQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  })

  console.log({ data })

  return (
    <Hydrate state={dehydrate(queryClient)}>
      <Posts />
    </Hydrate>
  )
}
