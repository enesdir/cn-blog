import { NextApiRequest, NextApiResponse } from 'next'

import { Role } from '@prisma/client'

export type contextPayload = {
  req: NextApiRequest
  res: NextApiResponse
}

export type UserDetails = {
  id: number
  name: string
  role: Role
}
