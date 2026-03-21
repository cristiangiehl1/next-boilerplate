import {
  type DefaultOptions,
  environmentManager,
  QueryClient,
} from '@tanstack/react-query'
import { cache } from 'react'

const defaultOptions: DefaultOptions = {
  queries: {
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 5 * 60 * 1000, // 5 min
  },
}

function makeQueryClient() {
  return new QueryClient({
    defaultOptions,
  })
}

let browserQueryClient: QueryClient | undefined = undefined
const getServerQueryClient = cache(() => makeQueryClient())

export function getQueryClient(): QueryClient {
  // Server: always make a new query client
  if (environmentManager.isServer()) {
    return getServerQueryClient()
  }

  // Browser: use singleton pattern to keep the same query client
  return (browserQueryClient ??= makeQueryClient())
}
