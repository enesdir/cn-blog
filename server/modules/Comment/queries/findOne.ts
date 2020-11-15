import { arg, queryField } from '@nexus/schema'

export const CommentFindOneQuery = queryField('findOneComment', {
  type: 'Comment',
  nullable: true,
  args: {
    where: arg({
      type: 'CommentWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, ctx) {
    return ctx.prisma.comment.findOne({
      where,
    })
  },
})
