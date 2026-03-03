import { parse } from 'cookie'

import { controller } from '@/infra/controller'

async function deleteHandler(request: Request) {
  const header = request.headers.get('cookie') ?? ''
  const cookies = parse(header)

  const sessionId = cookies.session_id

  if (sessionId) {
  }

  const response = Response.json({ status: 200 })
  controller.clearSessionCookie(response)

  return response
}

export const DELETE = controller.handleRouteError(deleteHandler)
