import { allow, and, or, rule, shield } from 'graphql-shield'

import { ApolloError } from 'apollo-server-micro'
import { Context } from '../context'
import { IS_DEV } from '../../src/utils/constants'
import { logger } from '../utils/logger'
import util from 'util'

// Rules
const isAuthenticated = rule({ cache: 'contextual' })(async (parent, args, ctx: Context, info) => {
  const userAuth = await ctx.user
  logger.debug(`Authenticated user:${util.inspect(userAuth)}`)
  return userAuth !== null && userAuth !== undefined
})

const isAdmin = rule({ cache: 'contextual' })(async (parent, args, ctx: Context, info) => {
  const userAuth = await ctx.user
  return userAuth?.role.includes('ADMIN') ?? false
})

export const permissions = shield(
  {
    Query: { '*': allow },
    Mutation: {

      // userLogin: rules.isUnauthenticated,
      // userSignup: rules.isUnauthenticated,
    },
  },
  {
    allowExternalErrors: IS_DEV,
    fallbackRule: allow,
    fallbackError: new ApolloError('Not Authorized!', 'NOT_AUTHORIZED'),
  }
)
