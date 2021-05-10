import { arg, mutationField, nonNull } from 'nexus'

export const TagDeleteManyMutation = mutationField('deleteManyTag', {
  type: 'BatchPayload',
  args: {
    where: nonNull(arg({
      type: 'TagWhereInput',
    })),
  },
  resolve(_parent, { where }, ctx) {
    return ctx.prisma.tag.deleteMany({ where })
  },
})
