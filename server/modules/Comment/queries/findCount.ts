import { queryField } from '@nexus/schema'

export const CommentFindManyCountQuery = queryField('findManyCommentCount', {
  type: 'Int',
  args: {
    where: 'CommentWhereInput',
    orderBy: 'CommentOrderByInput',
    cursor: 'CommentWhereUniqueInput',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, ctx) {
    return ctx.prisma.comment.count(args)
  },
})
