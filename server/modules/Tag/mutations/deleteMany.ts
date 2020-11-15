import { arg, mutationField } from '@nexus/schema'

export const TagDeleteManyMutation = mutationField('deleteManyTag', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'TagWhereInput',
      nullable: true,
    }),
  },
  resolve(_parent, { where }, ctx) {
    return ctx.prisma.tag.deleteMany({ where })
  },
})
