import { arg, mutationField } from '@nexus/schema'

export const PostUpdateOneMutation = mutationField('updateOnePost', {
  type: 'Post',
  nullable: false,
  args: {
    where: arg({
      type: 'PostWhereUniqueInput',
      nullable: false,
    }),
    data: arg({
      type: 'PostUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data, where }, ctx) {
    return ctx.prisma.post.update({
      where,
      data,
    })
  },
})
