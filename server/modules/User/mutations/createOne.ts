import { arg, mutationField, nonNull } from 'nexus'

export const UserCreateOneMutation = mutationField('createOneUser', {
  type: 'User',
  args: {
    data: nonNull(arg({
      type: 'UserCreateInput',
    })),
  },
  resolve(_parent, { data }, ctx) {
    return ctx.prisma.user.create({
      data,
    })
  },
})
