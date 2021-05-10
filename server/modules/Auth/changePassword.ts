import { compare, hash } from 'bcryptjs'
import { mutationField, stringArg, nonNull } from 'nexus'

import { Context } from '../../context'
import { UserInputError } from 'apollo-server-micro'

export const ChangePassword = mutationField('changePassword', {
  type: 'User',
  args: {
    oldPassword: nonNull(stringArg()),
    newPassword: nonNull(stringArg()),
  },
  resolve: async (_, { oldPassword, newPassword }, ctx: Context) => {
    const userContext = await ctx.user
    const user = await ctx.prisma.user.findUnique({ where: { id: Number(userContext.id) } })

    if (!user) {
      throw new Error(`User with id "${userContext.id}" doesnt exist.`)
    }

    const isPasswordValid = await compare(oldPassword, user.password)

    if (!isPasswordValid) {
      throw new UserInputError('Incorrect Current Password, Error: 1015')
    }

    const newHashedPwd = await hash(newPassword, 10)

    const updatedUser = ctx.prisma.user.update({
      where: { id: user.id },
      data: { password: newHashedPwd },
    })

    return updatedUser
  },
})
