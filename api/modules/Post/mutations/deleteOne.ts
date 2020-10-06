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
  resolve: async (_parent, { where }, ctx) => {
    await ctx.prisma.onDelete({ model: 'Post', where })
    return ctx.prisma.post.delete({
      where,
    })
  },
})
