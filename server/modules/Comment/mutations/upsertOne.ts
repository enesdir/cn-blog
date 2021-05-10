import { arg, mutationField, nonNull } from 'nexus'

export const CommentUpsertOneMutation = mutationField('upsertOneComment', {
  type: 'Comment',
  args: {
    where: nonNull(arg({
      type: 'CommentWhereUniqueInput',
    })),
    create: nonNull(arg({
      type: 'CommentCreateInput',
    })),
    update: nonNull(arg({
      type: 'CommentUpdateInput',
    })),
  },
  resolve(_parent, args, ctx) {
    return ctx.prisma.comment.upsert({
      ...args,
    })
  },
})
