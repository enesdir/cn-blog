import { arg, mutationField, nonNull } from 'nexus'

export const TagUpsertOneMutation = mutationField('upsertOneTag', {
  type: 'Tag',
  args: {
    where: nonNull(arg({
      type: 'TagWhereUniqueInput',
    })),
    create: nonNull(arg({
      type: 'TagCreateInput',
    })),
    update: nonNull(arg({
      type: 'TagUpdateInput',
    })),
  },
  resolve(_parent, args, ctx) {
    return ctx.prisma.tag.upsert({
      ...args,
    })
  },
})
