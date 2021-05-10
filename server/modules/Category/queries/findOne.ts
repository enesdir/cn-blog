import { queryField, nonNull, intArg } from 'nexus'

export const CategoryFindOneQuery = queryField('findOneCategory', {
  type: 'Category',
  args: {
    categoryId: nonNull(intArg()),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.category.findUnique({
      where: { id: Number(args.categoryId) },
    })
  },
})
