import { arg, mutationField } from '@nexus/schema'

export const UserUpdateOneMutation = mutationField('updateOneUser', {
  type: 'User',
  nullable: false,
  args: {
    where: arg({
      type: 'UserWhereUniqueInput',
      nullable: false,
    }),
    data: arg({
      type: 'UserUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data, where }, ctx) {
    return ctx.prisma.user.update({
      where,
      data,
    })
  },
})
