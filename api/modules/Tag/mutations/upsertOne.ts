import { arg, mutationField } from '@nexus/schema'

export const TagUpsertOneMutation = mutationField('upsertOneTag', {
  type: 'Tag',
  nullable: false,
  args: {
    where: arg({
      type: 'TagWhereUniqueInput',
      nullable: false,
    }),
    create: arg({
      type: 'TagCreateInput',
      nullable: false,
    }),
    update: arg({
      type: 'TagUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, ctx) {
    return ctx.prisma.tag.upsert({
      ...args,
    })
  },
})
