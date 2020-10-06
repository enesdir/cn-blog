import { arg, mutationField } from '@nexus/schema'

export const UserDeleteOneMutation = mutationField('deleteOneUser', {
  type: 'User',
  nullable: true,
  args: {
    where: arg({
      type: 'UserWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve: async (_parent, { where }, ctx) => {
    await ctx.prisma.onDelete({ model: 'User', where })
    return ctx.prisma.user.delete({
      where,
    })
  },
})
