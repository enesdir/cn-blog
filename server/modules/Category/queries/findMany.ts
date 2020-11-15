import { queryField } from '@nexus/schema'

export const CategoryFindManyQuery = queryField('findManyCategory', {
  type: 'Category',
  nullable: true,
  list: true,
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
