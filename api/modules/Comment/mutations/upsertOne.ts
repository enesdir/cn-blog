import { arg, mutationField } from '@nexus/schema'

export const CommentUpsertOneMutation = mutationField('upsertOneComment', {
  type: 'Comment',
  nullable: false,
  args: {
    where: arg({
      type: 'CommentWhereUniqueInput',
      nullable: false,
    }),
    create: arg({
      type: 'CommentCreateInput',
      nullable: false,
    }),
    update: arg({
      type: 'CommentUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, ctx) {
    return ctx.prisma.comment.upsert({
      ...args,
    })
  },
})
