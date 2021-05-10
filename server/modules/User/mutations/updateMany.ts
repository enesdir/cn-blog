import { arg, mutationField, nonNull } from 'nexus'

export const UserUpdateManyMutation = mutationField('updateManyUser', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'UserWhereInput',
    }),
    data: nonNull(arg({
      type: 'UserUpdateManyMutationInput',
    })),
  },
  resolve(_parent, args, ctx) {
    return ctx.prisma.user.updateMany(args)
  },
})
