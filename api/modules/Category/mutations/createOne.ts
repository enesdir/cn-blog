import { arg, mutationField } from '@nexus/schema'

export const CategoryCreateOneMutation = mutationField('createOneCategory', {
  type: 'Category',
  nullable: false,
  args: {
    data: arg({
      type: 'CategoryCreateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data }, ctx) {
    return ctx.prisma.category.create({
      data,
    })
  },
})
