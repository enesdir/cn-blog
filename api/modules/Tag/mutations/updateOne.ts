import { arg, mutationField } from '@nexus/schema'

export const TagUpdateOneMutation = mutationField('updateOneTag', {
  type: 'Tag',
  nullable: false,
  args: {
    where: arg({
      type: 'TagWhereUniqueInput',
      nullable: false,
    }),
    data: arg({
      type: 'TagUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data, where }, ctx) {
    return ctx.prisma.tag.update({
      where,
      data,
    })
  },
})
