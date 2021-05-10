import { intArg, queryField, nonNull } from 'nexus'

export const CommentFindOneQuery = queryField('findOneComment', {
  type: 'Comment',
  args: {
    commentId: nonNull(intArg()),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.comment.findUnique({
      where: { id: Number(args.commentId) },
    })
  },
})
