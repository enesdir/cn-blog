import { arg, mutationField, nonNull } from 'nexus'

export const CommentCreateOneMutation = mutationField('createOneComment', {
  type: 'Comment',
  args: {
    data: nonNull(arg({
      type: 'CommentCreateInput',
    })),
  },
  resolve(_parent, { data }, ctx) {
    return ctx.prisma.comment.create({
      data,
    })
  },
})
