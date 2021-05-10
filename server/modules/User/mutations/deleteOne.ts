import { arg, mutationField, nonNull } from 'nexus'

export const UserDeleteOneMutation = mutationField('deleteOneUser', {
  type: 'User',
  args: {
    where: nonNull(arg({
      type: 'UserWhereUniqueInput',
    })),
  },
  resolve(_parent, { where }, ctx) {
    return ctx.prisma.user.delete({ where })
  },
})
