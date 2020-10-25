import { arg, mutationField } from '@nexus/schema'

export const CategoryUpsertOneMutation = mutationField('upsertOneCategory', {
  type: 'Category',
  nullable: false,
  args: {
    where: arg({
      type: 'CategoryWhereUniqueInput',
      nullable: false,
    }),
    create: arg({
      type: 'CategoryCreateInput',
      nullable: false,
    }),
    update: arg({
      type: 'CategoryUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, ctx) {
    return ctx.prisma.category.upsert({
      ...args,
    })
  },
})
