import { ApolloError, AuthenticationError } from 'apollo-server-micro'
import { isPasswordValid, issueToken } from '../../utils/auth'
import { mutationField, stringArg } from '@nexus/schema'

import { Context } from '../../context'

export const Login = mutationField('userLogin', {
  type: 'AuthPayload',
  args: {
    email: stringArg({ nullable: false, description: 'email of the user' }),
    password: stringArg({ nullable: false, description: 'password of the user' }),
  },
  description: 'Login mutation: Send your email and password then get back a token',
  resolve: async (_, { email, password }, ctx: Context) => {
    const user = await ctx.prisma.user.findOne({ where: { email } })
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
