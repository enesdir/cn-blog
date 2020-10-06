import { Context, UserDetails, contextPayload } from './dbTypes'

import { PrismaClient } from '@prisma/client'
import { getCurrentUserByToken } from './utils/auth'
import { logger } from './utils/logger'

export function createContext(ctx: contextPayload): Context {
  let prisma: PrismaClient
  if (process.env.NODE_ENV !== 'production') {
    if (!global.prisma) {
      global.prisma = new PrismaClient({
        log: ['query', 'info', 'warn'],
        debug: true,
      })
    }
    prisma = global.prisma
  } else {
    prisma = new PrismaClient()
  }
  // The request is authenticated or not
  let user: Promise<UserDetails | undefined>
  const authorization = ctx.req.headers.authorization || ctx.req.cookies.token
  if (authorization) {
    const token = authorization.replace('Bearer ', '')
    logger.debug(`Request with bearer token found for ${ctx.req.method}`)
    user = getCurrentUserByToken(token)
  } else {
    logger.debug('Authorization headers not found')
    user = Promise.resolve(undefined)
  }
  user = user.catch(err => {
    // If any already caught error return undefined
    logger.error(err)
    return undefined
  })
  return { prisma, user }
}
