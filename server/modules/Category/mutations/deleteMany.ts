import { arg, mutationField } from '@nexus/schema'

export const CategoryDeleteManyMutation = mutationField('deleteManyCategory', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'CategoryWhereInput',
      nullable: true,
    }),
  },
  resolve(_parent, { where }, ctx) {
    return ctx.prisma.category.deleteMany({ where })
  },
})
