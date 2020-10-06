import { arg, mutationField } from '@nexus/schema'

export const PostUpdateManyMutation = mutationField('updateManyPost', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'PostWhereInput',
      nullable: true,
    }),
    data: arg({
      type: 'PostUpdateManyMutationInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, ctx) {
    return ctx.prisma.post.updateMany(args)
  },
})
