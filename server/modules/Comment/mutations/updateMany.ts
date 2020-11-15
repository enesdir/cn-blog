import { arg, mutationField } from '@nexus/schema'

export const CommentUpdateManyMutation = mutationField('updateManyComment', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'CommentWhereInput',
      nullable: true,
    }),
    data: arg({
      type: 'CommentUpdateManyMutationInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, ctx) {
    return ctx.prisma.comment.updateMany(args)
  },
})
