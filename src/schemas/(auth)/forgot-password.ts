// app/schemas/(auth)/forgot-password.ts
import { z } from 'zod'

import { emailValidator } from '../email'
import { phoneValidator } from '../phone'

// Schema para recuperação por e-mail
export const forgotPasswordEmailSchema = z.object({
  email: emailValidator,
  phone: z.string().optional(),
})

// Schema para recuperação por telefone
export const forgotPasswordPhoneSchema = z.object({
  email: z.string().optional(),
  phone: phoneValidator,
})

// Tipo unificado
export type ForgotPasswordFormData =
  | z.infer<typeof forgotPasswordEmailSchema>
  | z.infer<typeof forgotPasswordPhoneSchema>
