import { arg, mutationField, nonNull } from 'nexus'

export const TagUpdateOneMutation = mutationField('updateOneTag', {
  type: 'Tag',
  args: {
    where: nonNull(arg({
      type: 'TagWhereUniqueInput',
    })),
    data: nonNull(arg({
      type: 'TagUpdateInput',
    })),
  },
  resolve(_parent, { data, where }, ctx) {
    return ctx.prisma.tag.update({
      where,
      data,
    })
  },
})
