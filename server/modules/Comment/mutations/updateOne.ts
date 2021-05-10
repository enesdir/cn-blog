import { arg, mutationField, nonNull } from 'nexus'

export const CommentUpdateOneMutation = mutationField('updateOneComment', {
  type: 'Comment',
  args: {
    where: nonNull(arg({
      type: 'CommentWhereUniqueInput',
    })),
    data: nonNull(arg({
      type: 'CommentUpdateInput',
    })),
  },
  resolve(_parent, { data, where }, ctx) {
    return ctx.prisma.comment.update({
      where,
      data,
    })
  },
})
