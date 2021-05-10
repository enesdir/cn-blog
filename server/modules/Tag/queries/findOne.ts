import { arg, queryField, nonNull } from 'nexus'

export const TagFindOneQuery = queryField('findOneTag', {
  type: 'Tag',
  args: {
    where: nonNull(arg({
      type: 'TagWhereUniqueInput',
    })),
  },
  resolve(_parent, { where }, ctx) {
    return ctx.prisma.tag.findUnique({
      where,
    })
  },
})
