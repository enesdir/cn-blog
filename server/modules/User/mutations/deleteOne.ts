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
  resolve(_parent, { where }, ctx) {
    return ctx.prisma.user.delete({ where })
  },
})
