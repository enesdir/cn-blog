import { arg, mutationField, nonNull } from 'nexus'

export const PostUpdateManyMutation = mutationField('updateManyPost', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'PostWhereInput',
    }),
    data: nonNull(arg({
      type: 'PostUpdateManyMutationInput',
    })),
  },
  resolve(_parent, args, ctx) {
    return ctx.prisma.post.updateMany(args)
  },
})
