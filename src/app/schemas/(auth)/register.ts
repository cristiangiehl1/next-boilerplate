import z from 'zod'

import { emailValidator } from '../email'
import { nameValidator } from '../name'
import { confirmPasswordValidator, passwordValidator } from '../password'

export const registerSchema = z
  .object({
    name: nameValidator,
    email: emailValidator,
    password: passwordValidator,
    confirmPassword: confirmPasswordValidator,
  })
  .refine(({ confirmPassword, password }) => password === confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
  })

export type RegisterFormData = z.infer<typeof registerSchema>
