import { arg, mutationField } from '@nexus/schema'

export const UserDeleteManyMutation = mutationField('deleteManyUser', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'UserWhereInput',
      nullable: true,
    }),
  },
  resolve: async (_parent, { where }, ctx) => {
    await ctx.prisma.onDelete({ model: 'User', where })
    return ctx.prisma.user.deleteMany({ where })
  },
})
