import { arg, mutationField, nonNull } from 'nexus'

export const UserUpsertOneMutation = mutationField('upsertOneUser', {
  type: 'User',
  args: {
    where: nonNull(arg({
      type: 'UserWhereUniqueInput',
    })),
    create: nonNull(arg({
      type: 'UserCreateInput',
    })),
    update: nonNull(arg({
      type: 'UserUpdateInput',
    })),
  },
  resolve(_parent, args, ctx) {
    return ctx.prisma.user.upsert({
      ...args,
    })
  },
})
