import { arg, mutationField, nonNull } from 'nexus'

export const CommentDeleteManyMutation = mutationField('deleteManyComment', {
  type: 'BatchPayload',
  args: {
    where: nonNull(arg({
      type: 'CommentWhereInput',
    })),
  },
  resolve(_parent, { where }, ctx) {
    return ctx.prisma.comment.deleteMany({ where })
  },
})
