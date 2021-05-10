import { arg, queryField, nonNull } from 'nexus'

export const CategoryFindOneQuery = queryField('findOneCategory', {
  type: 'Category',
  args: {
    where: nonNull(arg({
      type: 'CategoryWhereUniqueInput',
    })),
  },
  resolve(_parent, { where }, ctx) {
    return ctx.prisma.category.findUnique({
      where,
    })
  },
})
