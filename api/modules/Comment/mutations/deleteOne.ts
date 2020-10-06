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
  resolve: async (_parent, { where }, ctx) => {
    await ctx.prisma.onDelete({ model: 'Comment', where })
    return ctx.prisma.comment.delete({
      where,
    })
  },
})
