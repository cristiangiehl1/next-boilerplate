import z from 'zod'

export const nameValidator = z.string().nonempty('O nome é obrigatório')
