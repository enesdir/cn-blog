import { extendType, stringArg } from '@nexus/schema'
import { hashPassword, issueToken } from '../../utils/auth'

import { Context } from '../../context'
import { UserInputError } from 'apollo-server-micro'
import validator from 'validator'

export const SignUp = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('userSignup', {
      type: 'AuthPayload',
      args: {
        name: stringArg(),
        email: stringArg({ nullable: false }),
        surname: stringArg(),
        password: stringArg({ nullable: false }),
      },
      description: 'Call this mutation to sign a new user up. It will return a auth payload',
      resolve: async (_, { name, email, surname, password }, ctx: Context) => {
        if (!validator.isEmail(email)) {
          throw new UserInputError('Wrong email address')
        }
        const existing = await ctx.prisma.user.findOne({ where: { email } })
        if (existing) {
          throw new UserInputError('There is a existing user with this Email address.')
        }
        if (password.length < 6) {
          throw new UserInputError('The Password length is not enough.')
        }

        const user = await ctx.prisma.user.create({
          data: {
            name,
            email,
            surname,
            password: hashPassword(password),
          },
        })
        const token = issueToken({ id: user.id, name: user.name, role: user.role })

        return {
          token,
          user,
        }
      },
    })
  },
})
