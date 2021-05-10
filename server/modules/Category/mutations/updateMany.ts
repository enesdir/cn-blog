import { arg, mutationField, nonNull } from 'nexus'

export const CategoryUpdateManyMutation = mutationField('updateManyCategory', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'CategoryWhereInput',
    }),
    data: nonNull(arg({
      type: 'CategoryUpdateManyMutationInput',
    })),
  },
  resolve(_parent, args, ctx) {
    return ctx.prisma.category.updateMany(args)
  },
})
