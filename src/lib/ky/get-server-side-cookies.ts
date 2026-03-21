'use server'

import { cookies as nextCookies } from 'next/headers'

export async function getServerSideCookies() {
  const cookieStore = await nextCookies()

  const cookieString = cookieStore
    .getAll()
    .map((cookie) => `${cookie.name}=${cookie.value}`)
    .join('; ')

  return cookieString
}
