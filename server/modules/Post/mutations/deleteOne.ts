import { arg, mutationField, nonNull } from 'nexus'

export const PostDeleteOneMutation = mutationField('deleteOnePost', {
  type: 'Post',
  args: {
    where: nonNull(arg({
      type: 'PostWhereUniqueInput',
    })),
  },
  resolve(_parent, { where }, ctx) {
    return ctx.prisma.post.delete({ where })
  },
})
