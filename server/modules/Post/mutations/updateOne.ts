import { arg, mutationField, nonNull } from 'nexus'

export const PostUpdateOneMutation = mutationField('updateOnePost', {
  type: 'Post',
  args: {
    where: nonNull(arg({
      type: 'PostWhereUniqueInput',
    })),
    data: nonNull(arg({
      type: 'PostUpdateInput',
    })),
  },
  resolve(_parent, { data, where }, ctx) {
    return ctx.prisma.post.update({
      where,
      data,
    })
  },
})
