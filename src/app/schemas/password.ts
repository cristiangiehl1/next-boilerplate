import z from 'zod'

export const passwordValidator = z
  .string()
  .trim()
  .nonempty('Senha informada inválida')

export const confirmPasswordValidator = z
  .string()
  .trim()
  .nonempty('A confirmação de senha é obrigatória')
