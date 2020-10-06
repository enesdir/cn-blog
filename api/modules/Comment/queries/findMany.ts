import { queryField } from '@nexus/schema'

export const CommentFindManyQuery = queryField('findManyComment', {
  type: 'Comment',
  nullable: true,
  list: true,
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
