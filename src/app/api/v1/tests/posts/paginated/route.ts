import { type NextRequest, NextResponse } from 'next/server'

import type { PaginationMeta } from '@/@types/pagination'
import { controller } from '@/infra/controller'

import { type Post, posts } from '../route'

export type PostsPaginatedResponse = {
  posts: Post[]
  pagination: PaginationMeta
}

async function getHandler(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams
  const pageParam = searchParams.get('page')
  const pageSizeParam = searchParams.get('pageSize')

  const page = pageParam ? parseInt(pageParam, 10) : 1
  const pageSize = pageSizeParam ? parseInt(pageSizeParam, 10) : 4

  console.log({ pageParam, pageSizeParam, pageSize, page })

  const start = (page - 1) * pageSize
  const end = start + pageSize
  const paginatedPosts = posts.slice(start, end)

  const totalItems = posts.length
  const totalPages = Math.ceil(totalItems / pageSize)

  console.log({ start, end, totalItems, totalPages, paginatedPosts })

  const pagination: PaginationMeta = {
    page,
    totalPages,
    totalItems,
  }

  return NextResponse.json<PostsPaginatedResponse>(
    {
      posts: paginatedPosts,
      pagination,
    },
    { status: 200 }
  )
}

export const GET = controller.handleRouteError(getHandler)
