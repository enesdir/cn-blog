import { arg, mutationField } from '@nexus/schema'

export const CategoryDeleteOneMutation = mutationField('deleteOneCategory', {
  type: 'Category',
  nullable: true,
  args: {
    where: arg({
      type: 'CategoryWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, ctx) {
    return ctx.prisma.category.delete({ where })
  },
})
