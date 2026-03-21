import {
  type FetchQueryOptions,
  type InfiniteData,
  keepPreviousData,
  type QueryClient,
  useInfiniteQuery,
  type UseInfiniteQueryOptions,
  type UsePrefetchQueryOptions,
  useQuery,
  type UseQueryOptions,
} from '@tanstack/react-query'
import type { HTTPError } from 'ky'

import type { PaginationParams } from '@/@types/pagination'
import { getAllPosts } from '@/api/v1/tests/posts/get-all-posts'
import { getAllPostsInfinite } from '@/api/v1/tests/posts/infinite/get-all-posts-infinite'
import { getAllPostsPaginated } from '@/api/v1/tests/posts/paginated/get-all-posts-paginated'
import type { InfiniteScrollPostsResponse } from '@/app/api/v1/tests/posts/infinite/route'
import type { BasicError } from '@/infra/errors'

type GetAllPosts = Awaited<ReturnType<typeof getAllPosts>>
type GetAllPostsPaginated = Awaited<ReturnType<typeof getAllPostsPaginated>>
type GetAllPostsQueryKey = ReturnType<typeof getAllPostsQueryKey>

type GetAllPoststUseQueryOptions = Omit<
  UseQueryOptions<
    GetAllPosts,
    HTTPError<BasicError>,
    GetAllPosts,
    GetAllPostsQueryKey
  >,
  'queryKey' | 'queryFn'
>

type GetAllPoststPaginatedUseQueryOptions = Omit<
  UseQueryOptions<
    GetAllPostsPaginated,
    HTTPError<BasicError>,
    GetAllPostsPaginated,
    GetAllPostsQueryKey
  >,
  'queryKey' | 'queryFn'
>

type GetAllPoststPrefetchQueryOptions = Omit<
  UsePrefetchQueryOptions<
    GetAllPostsPaginated,
    HTTPError<BasicError>,
    GetAllPostsQueryKey
  >,
  'queryKey' | 'queryFn'
>

type GetAllPoststFetchQueryOptions = Omit<
  FetchQueryOptions<
    GetAllPostsPaginated,
    HTTPError<BasicError>,
    GetAllPostsPaginated,
    GetAllPostsQueryKey
  >,
  'queryKey' | 'queryFn'
>

type GetAllPoststUseInfiniteQueryOptions = Omit<
  UseInfiniteQueryOptions<
    InfiniteScrollPostsResponse, // TData
    HTTPError<BasicError>, // TError
    InfiniteData<InfiniteScrollPostsResponse>, // TQueryFnData (por página)
    GetAllPostsQueryKey, // TQueryKey
    undefined | number // TPageParam
  >,
  'queryKey' | 'queryFn'
>

type GetAllPoststUsePrefetchInfiniteQueryOptions = Omit<
  UseInfiniteQueryOptions<
    InfiniteScrollPostsResponse,
    HTTPError<BasicError>,
    InfiniteData<InfiniteScrollPostsResponse>,
    GetAllPostsQueryKey,
    undefined | number
  >,
  'queryKey' | 'queryFn'
>

export const getAllPostsQueryKey = (params?: PaginationParams) => {
  return ['posts', params ? [...Object.values(params)] : '']
}

/* --- Client Hooks --- */
export function useGetAllPosts(options?: GetAllPoststUseQueryOptions) {
  return useQuery({
    queryKey: getAllPostsQueryKey(),
    queryFn: getAllPosts,
    staleTime: Infinity,
    ...options,
  })
}

export function useGetAllPostsPaginated(
  params: PaginationParams,
  options?: GetAllPoststPaginatedUseQueryOptions
) {
  return useQuery({
    queryKey: getAllPostsQueryKey(params),
    queryFn: ({ signal }) => getAllPostsPaginated(params, signal),
    staleTime: Infinity,
    placeholderData: keepPreviousData,
    ...options,
  })
}

export function useGetAllPostsInfinite(
  options?: GetAllPoststUseInfiniteQueryOptions
) {
  return useInfiniteQuery({
    queryKey: getAllPostsQueryKey(),
    initialPageParam: undefined as number | undefined,
    queryFn: ({ pageParam, signal }) =>
      getAllPostsInfinite({ cursor: pageParam }, signal),
    getNextPageParam: (lastPage) => lastPage.nextCursor ?? undefined,
    ...options,
  })
}

// /** --- Server / QueryClient functions --- */
export const fetchGetAllPosts = async (
  queryClient: QueryClient,
  params: PaginationParams,
  options?: GetAllPoststFetchQueryOptions
) => {
  return await queryClient.fetchQuery({
    queryKey: getAllPostsQueryKey(),
    queryFn: ({ signal }) => getAllPostsPaginated(params, signal),
    staleTime: Infinity,
    ...options,
  })
}

export const prefetchGetAllPosts = async (
  queryClient: QueryClient,
  params: PaginationParams,
  options?: GetAllPoststPrefetchQueryOptions
) => {
  await queryClient.prefetchQuery({
    queryKey: getAllPostsQueryKey(params),
    queryFn: ({ signal }) => getAllPostsPaginated(params, signal),
    staleTime: Infinity,
    ...options,
  })
}

export const prefetchGetAllPostsInfinite = async (
  queryClient: QueryClient,
  options?: GetAllPoststUsePrefetchInfiniteQueryOptions
) => {
  await queryClient.prefetchInfiniteQuery({
    queryKey: getAllPostsQueryKey(),
    initialPageParam: undefined as number | undefined,
    queryFn: ({ pageParam, signal }) =>
      getAllPostsInfinite({ cursor: pageParam }, signal),
    ...options,
  })
}
