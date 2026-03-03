import z from 'zod'

const phoneRegex = /^\+55\d{2}9\d{8}$/

export const phoneValidator = z
  .string()
  .regex(phoneRegex, 'Informe um celular válido — ex: (11) 91234-5678')
