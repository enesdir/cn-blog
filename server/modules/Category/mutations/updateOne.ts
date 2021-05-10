import { arg, mutationField, nonNull } from 'nexus'

export const CategoryUpdateOneMutation = mutationField('updateOneCategory', {
  type: 'Category',
  args: {
    where: nonNull(arg({
      type: 'CategoryWhereUniqueInput',
    })),
    data: nonNull(arg({
      type: 'CategoryUpdateInput',
    })),
  },
  resolve(_parent, { data, where }, ctx) {
    return ctx.prisma.category.update({
      where,
      data,
    })
  },
})
