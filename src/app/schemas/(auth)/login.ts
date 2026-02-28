import z from 'zod'

import { emailValidator } from '../email'
import { passwordValidator } from '../password'

export const loginSchema = z.object({
  email: emailValidator,
  password: passwordValidator,
})

export type LoginFormData = z.infer<typeof loginSchema>
