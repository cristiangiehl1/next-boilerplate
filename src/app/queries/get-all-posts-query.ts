// import {
//   type FetchQueryOptions,
//   type InfiniteData,
//   type QueryClient,
//   useInfiniteQuery,
//   type UseInfiniteQueryOptions,
//   type UsePrefetchQueryOptions,
//   useQuery,
//   type UseQueryOptions,
// } from '@tanstack/react-query'
// import type { AxiosError } from 'axios'

// import {
//   getAllPatients,
//   getAllPatientsIninite,
// } from '@/app/_api/patients/get-all-patients'
// import type { BasicError } from '@/infra/errors'
// import type { GetAllPatientsResponse } from '@/pages/api/v1/patients'

// type GetAllAppointmentUseQueryOptions = Omit<
//   UseQueryOptions<
//     GetAllPatientsResponse,
//     AxiosError<BasicError>,
//     GetAllPatientsResponse,
//     ReturnType<typeof getAllPatientsQueryKey>
//   >,
//   'queryKey' | 'queryFn'
// >

// type GetAllAppointmentPrefetchQueryOptions = Omit<
//   UsePrefetchQueryOptions<
//     GetAllPatientsResponse,
//     AxiosError<BasicError>,
//     ReturnType<typeof getAllPatientsQueryKey>
//   >,
//   'queryKey' | 'queryFn'
// >

// type GetAllAppointmentFetchQueryOptions = Omit<
//   FetchQueryOptions<
//     GetAllPatientsResponse,
//     AxiosError<BasicError>,
//     InfiniteData<GetAllPatientsResponse, { page: number; pageSize?: number }>,
//     ReturnType<typeof getAllPatientsQueryKey>
//   >,
//   'queryKey' | 'queryFn'
// >

// type GetAllAppointmentUseInfiniteQueryOptions = Omit<
//   UseInfiniteQueryOptions<
//     GetAllPatientsResponse,
//     AxiosError<BasicError>,
//     InfiniteData<GetAllPatientsResponse, { page: number; pageSize?: number }>,
//     ReturnType<typeof getAllPatientsQueryKey>,
//     { page: number; pageSize?: number }
//   >,
//   'queryKey' | 'queryFn'
// >

// type GetAllAppointmentUsePrefetchInfiniteQueryOptions = Omit<
//   UseInfiniteQueryOptions<
//     GetAllPatientsResponse,
//     AxiosError<BasicError>,
//     GetAllPatientsResponse,
//     ReturnType<typeof getAllPatientsQueryKey>,
//     { page: number; pageSize?: number }
//   >,
//   'queryKey' | 'queryFn'
// >

// export const getAllPatientsQueryKey = () => {
//   return ['all-patients']
// }

// export const getAllPatientsQuery = {
//   use: (options?: GetAllAppointmentUseQueryOptions) =>
//     useQuery({
//       queryKey: getAllPatientsQueryKey(),
//       queryFn: getAllPatients,
//       staleTime: Infinity,
//       ...options,
//     }),

//   prefetch: async (
//     queryClient: QueryClient,
//     options?: GetAllAppointmentPrefetchQueryOptions
//   ) => {
//     await queryClient.prefetchQuery({
//       queryKey: getAllPatientsQueryKey(),
//       queryFn: getAllPatients,
//       staleTime: Infinity,
//       ...options,
//     })
//   },

//   fetch: async (
//     queryClient: QueryClient,
//     options?: GetAllAppointmentFetchQueryOptions
//   ) => {
//     return await queryClient.fetchQuery({
//       queryKey: getAllPatientsQueryKey(),
//       queryFn: getAllPatients,
//       staleTime: Infinity,
//       ...options,
//     })
//   },

//   useInfinite: (options?: GetAllAppointmentUseInfiniteQueryOptions) =>
//     useInfiniteQuery({
//       queryKey: getAllPatientsQueryKey(),
//       initialPageParam: { page: 1, pageSize: 10 },
//       queryFn: async ({ pageParam }) => await getAllPatientsIninite(pageParam),
//       getNextPageParam: (lastPage, _allPages, pageParam) => {
//         const nextPage = lastPage.pagination?.nextPage
//         if (!nextPage) return undefined

//         return {
//           page: nextPage,
//           pageSize: pageParam.pageSize,
//         }
//       },
//       ...options,
//     }),

//   prefetchInfinite: async (
//     queryClient: QueryClient,
//     options?: GetAllAppointmentUsePrefetchInfiniteQueryOptions
//   ) => {
//     await queryClient.prefetchInfiniteQuery({
//       queryKey: getAllPatientsQueryKey(),
//       initialPageParam: { page: 1, pageSize: 10 },
//       queryFn: async ({ pageParam }) => await getAllPatientsIninite(pageParam),
//       ...options,
//     })
//   },
// }
