import { arg, mutationField } from '@nexus/schema'

export const PostDeleteManyMutation = mutationField('deleteManyPost', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'PostWhereInput',
      nullable: true,
    }),
  },
  resolve: async (_parent, { where }, ctx) => {
    await ctx.prisma.onDelete({ model: 'Post', where })
    return ctx.prisma.post.deleteMany({ where })
  },
})
