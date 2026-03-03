import 'server-only'

import z from 'zod'

import { InternalServerError } from '@/infra/errors'

const env = {
  BASE_API_URL: process.env.BASE_API_URL,
  DATABASE_URL: process.env.DATABASE_URL,
}

const serverEnvSchema = z.object({
  BASE_API_URL: z.url().nonempty(),
  DATABASE_URL: z.url().nonempty(),
})

const { success, data, error } = serverEnvSchema.safeParse(env)

if (!success) {
  console.error('❌ Variáveis de ambiente server-side inválidas:')
  console.error(z.treeifyError(error))

  throw new InternalServerError({
    message: 'Variavéis de ambiente server-side inválidas',
    cause: error,
  })
}

export const serverEnv = data
