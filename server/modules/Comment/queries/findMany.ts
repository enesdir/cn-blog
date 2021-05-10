import { queryField, list } from 'nexus'

export const CommentFindManyQuery = queryField('findManyComment', {
  type: list('Comment'),
  args: {
    where: 'CommentWhereInput',
    orderBy: 'CommentOrderByInput',
    cursor: 'CommentWhereUniqueInput',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, ctx) {
    return ctx.prisma.comment.findMany({
      ...args,
    })
  },
})
