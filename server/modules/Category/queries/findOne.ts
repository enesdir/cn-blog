import { arg, queryField } from '@nexus/schema'

export const CategoryFindOneQuery = queryField('findOneCategory', {
  type: 'Category',
  nullable: true,
  args: {
    where: arg({
      type: 'CategoryWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, ctx) {
    return ctx.prisma.category.findOne({
      where,
    })
  },
})
