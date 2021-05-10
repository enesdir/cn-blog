import { ApolloError, AuthenticationError } from 'apollo-server-micro'
import { isPasswordValid, issueToken } from '../../utils/auth'
import { mutationField, stringArg, nonNull } from 'nexus'

import { Context } from '../../context'

export const Login = mutationField('userLogin', {
  type: 'AuthPayload',
  args: {
    email: nonNull(stringArg({ description: 'email of the user' })),
    password: nonNull(stringArg({ description: 'password of the user' })),
  },
  description: 'Login mutation: Send your email and password then get back a token',
  resolve: async (_, { email, password }, ctx: Context) => {
    const user = await ctx.prisma.user.findUnique({ where: { email } })
    // Check to see if user exists
    if (!user) {
      throw new ApolloError(`No user found for email: ${email}`, 'USER_NOT_FOUND')
    }

    const isPasswdValid = isPasswordValid(password, user.password)

    if (!isPasswdValid) {
      throw new AuthenticationError('Wrong Password')
    }
    // Sign the JWT token
    const token = issueToken({ id: user.id, name: user.name, role: user.role })
    return { user, token }
  },
})
