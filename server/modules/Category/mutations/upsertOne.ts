import { arg, mutationField, nonNull } from 'nexus'

export const CategoryUpsertOneMutation = mutationField('upsertOneCategory', {
  type: 'Category',
//  nullable: false,
  args: {
    where: nonNull(arg({
      type: 'CategoryWhereUniqueInput',
    })),
    create: nonNull(arg({
      type: 'CategoryCreateInput',
    })),
    update: nonNull(arg({
      type: 'CategoryUpdateInput',
    })),
  },
  resolve(_parent, args, ctx) {
    return ctx.prisma.category.upsert({
      ...args,
    })
  },
})
