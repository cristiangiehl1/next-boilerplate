import { serialize } from 'cookie'
import type { NextResponse } from 'next/server'
import { ZodError } from 'zod'

import { session } from '@/models/session'

import {
  ConflictError,
  ForbiddenError,
  InternalServerError,
  NotFoundError,
  ServiceError,
  UnauthorizedError,
  ValidationError,
} from './errors'

type errorHandler = (req: Request) => Promise<Response>

function handleRouteError(handler: errorHandler) {
  return async (req: Request) => {
    try {
      return await handler(req)
    } catch (err) {
      if (
        err instanceof ValidationError ||
        err instanceof NotFoundError ||
        err instanceof ConflictError ||
        err instanceof ForbiddenError ||
        err instanceof ServiceError
      ) {
        return Response.json(err, { status: err.statusCode })
      }

      if (err instanceof UnauthorizedError) {
        const response = Response.json(err, { status: err.statusCode })
        clearSessionCookie(response)
        return response
      }

      if (err instanceof ZodError) {
        const parsedZodError = parseZodError(err)

        return Response.json(parsedZodError, {
          status: parsedZodError.statusCode,
        })
      }

      // if (
      //   err instanceof jwt.TokenExpiredError ||
      //   err instanceof jwt.JsonWebTokenError
      // ) {
      //   const validationError = new ValidationError({
      //     message: 'O token é inválido ou expirou.',
      //     action: 'Por favor, solicite uma nova redefinição de senha.',
      //   })

      //   return res.status(validationError.statusCode).json(validationError)
      // }

      const publicErrorObject = new InternalServerError({
        cause: err,
      })

      console.error(publicErrorObject)

      return Response.json(publicErrorObject, {
        status: publicErrorObject.statusCode,
      })
    }
  }
}

export function setSessionCookie(response: Response, token: string) {
  const serialized = serialize('session_id', token, {
    path: '/',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: session.EXPIRATION_IN_MILLISECONDS / 1000,
  })

  response.headers.append('Set-Cookie', serialized)
}

function clearSessionCookie(response: Response) {
  const serialized = serialize('session_id', 'invalid', {
    path: '/',
    maxAge: -1,
    secure: process.env.NODE_ENV === 'production', // aceita ou nao HTTP ou apenas HTTPS
    httpOnly: true, // codigo javascript do client-side nao consegue acessar os cookies marcados com http-only, tambem conhecido como XXS (Cross-Site Scripting)
  })

  response.headers.append('Set-Cookie', serialized)
}

function parseZodError(err: ZodError): ValidationError {
  const message = err.issues
    .map((e) => `${e.path.join('.')}: ${e.message}`)
    .join(' | ')

  return new ValidationError({
    message,
    action: 'Verifique os dados enviados e tente novamente.',
    cause: err,
  })
}

export const controller = {
  handleRouteError,
  setSessionCookie,
  clearSessionCookie,
}
