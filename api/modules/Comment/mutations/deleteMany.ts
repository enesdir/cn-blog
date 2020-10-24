import { arg, mutationField } from '@nexus/schema'

export const CommentDeleteManyMutation = mutationField('deleteManyComment', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'CommentWhereInput',
      nullable: true,
    }),
  },
  resolve(_parent, { where }, ctx) {
    return ctx.prisma.comment.deleteMany({ where })
  },
})
