import { arg, mutationField } from '@nexus/schema'

export const TagDeleteOneMutation = mutationField('deleteOneTag', {
  type: 'Tag',
  nullable: true,
  args: {
    where: arg({
      type: 'TagWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, ctx) {
    return ctx.prisma.tag.delete({ where })
  },
})
