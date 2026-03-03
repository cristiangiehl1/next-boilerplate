import { NextResponse } from 'next/server'
import { z } from 'zod'

const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
})

export async function GET() {
  return NextResponse.json([{ id: '1', name: 'Cristian' }])
}

// exportando metadados OpenAPI
// export const openapi = {
//   summary: 'List users',
//   responses: {
//     200: {
//       description: 'User list',
//       content: {
//         'application/json': {
//           schema: UserSchema.array(),
//         },
//       },
//     },
//   },
// }
