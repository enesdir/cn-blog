import { arg, queryField, nonNull } from 'nexus'

export const CommentFindOneQuery = queryField('findOneComment', {
  type: 'Comment',
  args: {
    where: nonNull(arg({
      type: 'CommentWhereUniqueInput',
    })),
  },
  resolve(_parent, { where }, ctx) {
    return ctx.prisma.comment.findUnique({
      where,
    })
  },
})
