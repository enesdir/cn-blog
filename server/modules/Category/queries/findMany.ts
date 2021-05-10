import { list, queryField } from 'nexus'

export const CategoryFindManyQuery = queryField('findManyCategory', {
  type: list('Category'),
  args: {
    where: 'CategoryWhereInput',
    orderBy: 'CategoryOrderByInput',
    cursor: 'CategoryWhereUniqueInput',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, ctx) {
    return ctx.prisma.category.findMany({
      ...args,
    })
  },
})
