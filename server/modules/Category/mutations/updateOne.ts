import { arg, mutationField } from '@nexus/schema'

export const CategoryUpdateOneMutation = mutationField('updateOneCategory', {
  type: 'Category',
  nullable: false,
  args: {
    where: arg({
      type: 'CategoryWhereUniqueInput',
      nullable: false,
    }),
    data: arg({
      type: 'CategoryUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data, where }, ctx) {
    return ctx.prisma.category.update({
      where,
      data,
    })
  },
})
