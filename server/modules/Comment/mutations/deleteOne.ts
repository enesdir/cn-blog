import { arg, mutationField, nonNull } from 'nexus'

export const CommentDeleteOneMutation = mutationField('deleteOneComment', {
  type: 'Comment',
  args: {
    where: nonNull(arg({
      type: 'CommentWhereUniqueInput',
    })),
  },
  resolve(_parent, { where }, ctx) {
    return ctx.prisma.comment.delete({ where })
  },
})
