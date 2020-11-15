import { arg, mutationField } from '@nexus/schema'

export const TagUpdateManyMutation = mutationField('updateManyTag', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'TagWhereInput',
      nullable: true,
    }),
    data: arg({
      type: 'TagUpdateManyMutationInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, ctx) {
    return ctx.prisma.tag.updateMany(args)
  },
})
