import { controller } from '@/infra/controller'
import { registerSchema } from '@/schemas/(auth)/register'

async function postHandler(request: Request) {
  const body = await request.json()
  const { name, confirmPassword, email, password } = registerSchema.parse(body)

  const response = Response.json(body, { status: 201 })

  controller.setSessionCookie(response, 'dasdsadsadsads')

  return response
}

export const POST = controller.handleRouteError(postHandler)
