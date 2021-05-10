import { arg, mutationField, nonNull } from 'nexus'

export const CategoryDeleteOneMutation = mutationField('deleteOneCategory', {
  type: 'Category',
  args: {
    where: nonNull(arg({
      type: 'CategoryWhereUniqueInput',
    })),
  },
  resolve(_parent, { where }, ctx) {
    return ctx.prisma.category.delete({ where })
  },
})
