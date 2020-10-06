import { arg, mutationField } from '@nexus/schema'

export const CommentCreateOneMutation = mutationField('createOneComment', {
  type: 'Comment',
  nullable: false,
  args: {
    data: arg({
      type: 'CommentCreateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data }, ctx) {
    return ctx.prisma.comment.create({
      data,
    })
  },
})
