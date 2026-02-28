import z from 'zod'

import { InternalServerError } from '@/infra/errors'

const env = {
  NEXT_PUBLIC_LOGIN_REDIRECT_URL: process.env.NEXT_PUBLIC_LOGIN_REDIRECT_URL,
}

const clientEnvSchema = z.object({
  NEXT_PUBLIC_LOGIN_REDIRECT_URL: z.url().nonempty(),
})

const { success, data, error } = clientEnvSchema.safeParse(env)

if (!success) {
  console.error('❌ Variáveis de ambiente client-side inválidas:')
  console.error(z.treeifyError(error))

  throw new InternalServerError({
    message: 'Variavéis de ambiente client-side inválidas',
    cause: error,
  })
}

export const clientEnv = data
