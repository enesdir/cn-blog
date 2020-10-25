import { arg, mutationField } from '@nexus/schema'

export const CategoryUpdateManyMutation = mutationField('updateManyCategory', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'CategoryWhereInput',
      nullable: true,
    }),
    data: arg({
      type: 'CategoryUpdateManyMutationInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, ctx) {
    return ctx.prisma.category.updateMany(args)
  },
})
