import { arg, mutationField } from 'nexus'

export const CategoryDeleteManyMutation = mutationField('deleteManyCategory', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'CategoryWhereInput',
    }),
  },
  resolve(_parent, { where }, ctx) {
    return ctx.prisma.category.deleteMany({ where })
  },
})
