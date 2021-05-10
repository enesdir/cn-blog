import { arg, mutationField, nonNull } from 'nexus'

export const UserUpdateOneMutation = mutationField('updateOneUser', {
  type: 'User',
  args: {
    where: nonNull(arg({
      type: 'UserWhereUniqueInput',
    })),
    data: nonNull(arg({
      type: 'UserUpdateInput',
    })),
  },
  resolve(_parent, { data, where }, ctx) {
    return ctx.prisma.user.update({
      where,
      data,
    })
  },
})
