import z from 'zod'

export const emailValidator = z.email('E-mail informado inválido').trim()
