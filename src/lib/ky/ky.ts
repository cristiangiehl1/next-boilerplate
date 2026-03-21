import ky from 'ky'

import { clientEnv } from '@/infra/client-env'

import { getServerSideCookies } from './get-server-side-cookies'

export const api = ky.create({
  prefixUrl: clientEnv.NEXT_PUBLIC_BASE_API_URL,
  hooks: {
    beforeRequest: [
      async (req) => {
        if (typeof window === 'undefined') {
          const cookies = await getServerSideCookies()

          req.headers.set('cookie', cookies)
        }
      },
    ],
  },
})
