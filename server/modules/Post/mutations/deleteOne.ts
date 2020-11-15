import { arg, mutationField } from '@nexus/schema'

export const PostDeleteOneMutation = mutationField('deleteOnePost', {
  type: 'Post',
  nullable: true,
  args: {
    where: arg({
      type: 'PostWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, ctx) {
    return ctx.prisma.post.delete({ where })
  },
})
