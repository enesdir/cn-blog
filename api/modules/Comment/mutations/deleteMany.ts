import { arg, mutationField } from '@nexus/schema'

export const CommentDeleteManyMutation = mutationField('deleteManyComment', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'CommentWhereInput',
      nullable: true,
    }),
  },
  resolve: async (_parent, { where }, ctx) => {
    await ctx.prisma.onDelete({ model: 'Comment', where })
    return ctx.prisma.comment.deleteMany({ where })
  },
})
