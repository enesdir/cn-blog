import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient, Role } from '@prisma/client'

export type contextPayload = {
  req: NextApiRequest
  res: NextApiResponse
}

export type UserDetails = {
  id: number
  name: string
  role: Role
}

export interface Context {
  prisma: PrismaClient
  user?: Promise<UserDetails | undefined>
}
