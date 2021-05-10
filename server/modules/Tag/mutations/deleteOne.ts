import { arg, mutationField, nonNull } from 'nexus'

export const TagDeleteOneMutation = mutationField('deleteOneTag', {
  type: 'Tag',
  args: {
    where: nonNull(arg({
      type: 'TagWhereUniqueInput',
    })),
  },
  resolve(_parent, { where }, ctx) {
    return ctx.prisma.tag.delete({ where })
  },
})
