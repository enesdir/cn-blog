import { arg, mutationField, nonNull } from 'nexus'

export const TagUpdateManyMutation = mutationField('updateManyTag', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'TagWhereInput',
    }),
    data: nonNull(arg({
      type: 'TagUpdateManyMutationInput',
    })),
  },
  resolve(_parent, args, ctx) {
    return ctx.prisma.tag.updateMany(args)
  },
})
