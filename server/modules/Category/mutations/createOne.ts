import { arg, mutationField, nonNull } from 'nexus'

export const CategoryCreateOneMutation = mutationField('createOneCategory', {
  type: 'Category',
  args: {
    data: nonNull(arg({
      type: 'CategoryCreateInput',

    })),
  },
  resolve(_parent, { data }, ctx) {
    return ctx.prisma.category.create({
      data,
    })
  },
})
