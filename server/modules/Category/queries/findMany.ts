import { list, queryField } from 'nexus'

export const CategoryFindManyQuery = queryField('categories', {
  type: list('Category'),
  args: {
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, ctx) {
    return ctx.prisma.category.findMany({
      ...args,
    })
  },
})
