import { arg, mutationField } from '@nexus/schema'

export const PostDeleteManyMutation = mutationField('deleteManyPost', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'PostWhereInput',
      nullable: true,
    }),
  },
  resolve(_parent, { where }, ctx) {
    return ctx.prisma.post.deleteMany({ where })
  },
})
