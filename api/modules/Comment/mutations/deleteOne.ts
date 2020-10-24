import { arg, mutationField } from '@nexus/schema'

export const CommentDeleteOneMutation = mutationField('deleteOneComment', {
  type: 'Comment',
  nullable: true,
  args: {
    where: arg({
      type: 'CommentWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, ctx) {
    return ctx.prisma.comment.delete({ where })
  },
})
