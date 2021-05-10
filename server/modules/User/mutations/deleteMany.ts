import { arg, mutationField } from 'nexus'

export const UserDeleteManyMutation = mutationField('deleteManyUser', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'UserWhereInput',
    }),
  },
  resolve(_parent, { where }, ctx) {
    return ctx.prisma.user.deleteMany({ where })
  },
})
