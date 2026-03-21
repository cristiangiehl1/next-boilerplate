import { type NextRequest, NextResponse } from 'next/server'

import { controller } from '@/infra/controller'

import { type Post, posts } from '../route'

export type InfiniteScrollPostsResponse = {
  posts: Post[]
  totalPosts: number
  nextCursor?: number
}

async function getHandler(req: NextRequest) {
  const cursorParam = req.nextUrl.searchParams.get('cursor')
  const cursor = cursorParam ? parseInt(cursorParam, 10) : 0

  const pageSize = 4

  const start = cursor
  const end = start + pageSize

  const paginatedPosts = posts.slice(start, end)
  const totalPosts = posts.length

  const nextCursor = end < totalPosts ? end : undefined

  const response: InfiniteScrollPostsResponse = {
    posts: paginatedPosts,
    totalPosts,
    nextCursor,
  }

  return NextResponse.json(response, { status: 200 })
}

export const GET = controller.handleRouteError(getHandler)
