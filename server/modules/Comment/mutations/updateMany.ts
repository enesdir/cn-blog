import { arg, mutationField, nonNull } from 'nexus'

export const CommentUpdateManyMutation = mutationField('updateManyComment', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'CommentWhereInput',
    }),
    data: nonNull(arg({
      type: 'CommentUpdateManyMutationInput',
    })),
  },
  resolve(_parent, args, ctx) {
    return ctx.prisma.comment.updateMany(args)
  },
})
