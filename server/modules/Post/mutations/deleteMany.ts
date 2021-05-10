import { arg, mutationField } from 'nexus'

export const PostDeleteManyMutation = mutationField('deleteManyPost', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'PostWhereInput',
    }),
  },
  resolve(_parent, { where }, ctx) {
    return ctx.prisma.post.deleteMany({ where })
  },
})
